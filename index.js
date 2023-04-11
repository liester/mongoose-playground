const { MongoClient, ObjectId } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dataMap = {
  '5e626b87aec703003121631b':
    ['5c0939f727bad30bdf9b37fe',
      '5bf2e2b9dcd509449321db8d',
      '5c700a9593075519eb013522',
      '5c757b9309f7dd2bf67dd761',
      '5c74202c79b2f94fe8f12754',
      '5dc4352e9210fe65c3ad9a94',
      '5e0e05b6286a3936352ff9dc',
      '5e0a0cdb8367af0820cf074e',
      '5e3340d71c41593cd2f35fe9'],
  '5e6264d6aec70300312161bf':
    ['5f6024214877d7001edfacb1',
      '5f6024664877d7001edfacbd',
      '587d1f010026a626170de09b',
      '5ed7cbc0c5ccaf002cf7a3b5',
      '5b295b3cbce1359ed6db0eba',
      '5aa68d6bde869621d284bfd5',
      '5b3120d4f71a52b3948f2abe',
      '5655e0e4eddebb01ba985310',
      '5ed7d2320614d700313cc070',
      '58fa24920c6b230f5977a722',
      '56605fa5eddebb01ba98531e',
      '5655e0c3eddebb01ba98530f',
      '586d236339a253fa2a517cee',
      '56a660faeddebb01ba98539b',
      '5655e0a4eddebb01ba98530e',
      '5655e052eddebb01ba98530d',
      '60021fc2a73003001d3d7379',
      '6116822dc7dc31001d2e9d75',
      '60467bd219a85d001d3fe60b',
      '61799c6b498d83001de5ad27',
      '5ed7cced16346000337542ad',
      '629918f89c5e2a00243184bc'],
  '607df314f908b4001d713b14': ['6234e1cc5206e1001c574cbe'],
  '5e7e2645a1241a002edc6723': ['5e8220878cf8d3003339253a'],
  '621cd5e2f84bac001c25bec4': ['621cd798f84bac001c25d7ec'],
  '62c5ff62a3421d0024137cb9': ['62c87780405faa0032c538b0'],
  '624e1dfaa086be001c454025': ['6250bb32a086be001c79f726'],
  '5e626ac7aec703003121630d': ['5baba15388cc99752f1bf2b5'],
  '5e6264fbaec70300312161ff': ['598b39c96f3ca7af101eeace'],
  '5e6268aaaec7030031216290': ['5afd856004e88947c0e00fba'],
  '5e626e6910d0cd0033076d5f': ['5e29b1ef45c2be7d36587ace'],
  '617960ced37322001d5f5f5c': ['5da489a1b999695f7f9a3f49'],
  '62e427a9a4fe3a002fa9b523': ['62e42895a4fe3a002fa9dbf3'],
  '62583473192fd4001cf1a7eb': ['61782cb2c9dcc4001dfbb2e7', '5af33a4a1ba75b73cdda9398'],
  '5e975d60f61b0b003172f680': ['5e975d8e1698a20030e7942b'],
  '624e1e85a086be001c454a26': ['6258605e1a3c2b001c08c69c'],
  '60673648bbcdb9001d43deff': ['60673757bbcdb9001d43f935'],
  '5f68f1b0479a34001db48083': ['62a2138b468179002430d369'],
  '5e626977aec70300312162c0': ['597640c2a9b942294eea619c'],
  '5f6b9283cbadec001d8891ce': ['5f6b9261cbadec001d888fe0'],
  '5f4fc446a0ebc100320a5056':
    ['5f9b1167215496001d440968',
      '5fb444c1678d43001d7cf764',
      '5f9c2e70b69d99001dc5e73b',
      '5f88675120501f001e005579',
      '5f8094cd30f882001d4e448e',
      '5f9c5ea2b69d99001dc73183',
      '5f8766ec20501f001efe6517',
      '5f9b131e215496001d441351',
      '5f9b1550215496001d441f87',
      '5fa07bb8216326001d09a3d1',
      '5f7741e86776b4001e78ae1d',
      '5fa0878e216326001d09e57a',
      '5f4fca8a5e72d7003495dabe',
      '5f9c2e81b69d99001dc5e751',
      '5f886b9320501f001e006f01',
      '5f80968c30f882001d4e5079',
      '5fb444c1678d43001d7cf764',
      '5f9c5693b69d99001dc6ff36'],
  '615f54fe577e93001c0db600':
    ['61604df3c0c97f001c01262a',
      '6160521bc0c97f001c0199a1',
      '6160559ec0c97f001c01ec73',
      '616055fcc0c97f001c01f843',
      '616050edc0c97f001c017a41',
      '6160572ac0c97f001c0216c1',
      '616056ddc0c97f001c020da6',
      '6160568cc0c97f001c020649',
      '61604df3c0c97f001c01262a',
      '61605655c0c97f001c0202dd',
      '6160539cc0c97f001c01c448',
      '616053a3c0c97f001c01c680',
      '616050aec0c97f001c0173c1',
      '6160540dc0c97f001c01d131',
      '61604fb5c0c97f001c015d43',
      '616054ddc0c97f001c01de2a',
      '61605492c0c97f001c01da99',
      '616056c6c0c97f001c0208d0',
      '61605083c0c97f001c0170b7',
      '61605352c0c97f001c01be8e',
      '616050c7c0c97f001c0177e3',
      '61605405c0c97f001c01cf87',
      '61605713c0c97f001c0212a3',
      '6160519ac0c97f001c018d2a',
      '616057e9c0c97f001c022636',
      '61605508c0c97f001c01e2dd',
      '6160555ec0c97f001c01e8cf',
      '61605788c0c97f001c021d45',
      '616057a6c0c97f001c021f18',
      '61605628c0c97f001c0200f2',
      '61605819c0c97f001c022b37',
      '61604fbcc0c97f001c015d7a',
      '616052ccc0c97f001c01b023',
      '6160532bc0c97f001c01bb3e',
      '61604df3c0c97f001c012621',
      '616055a9c0c97f001c01ef63',
      '61605893c0c97f001c02364f',
      '616052d1c0c97f001c01b089',
      '616058e2c0c97f001c023de2',
      '61605173c0c97f001c018973',
      '61605535c0c97f001c01e490',
      '62c5d8046dcd2a0024bd7e68',
      '62c5d7e46dcd2a0024bd76e1',
      '6384e5b25c88d9002ff19b1c'],
  '5e626529aec7030031216206': ['592308f28ab82e1321b87603'],
  '5e626c64aec7030031216359':
    ['5cb72c06c7166f2479588a81',
      '5ee8d90e6b33be0031d9a232',
      '5ee923cb6a313d00359cae27',
      '5ee923ec8ef058002b1f757b'],
  '5e626603aec703003121625f':
    ['59415fb0b234376f563d8450',
      '5931b7929aafee491a7bffb1',
      '59134ae04c49d2b46a0a7f3e',
      '58178f1fcddc76a8810e61bc',
      '5942d7fdbc88ffb46dc2903d',
      '59dbe4700e7148eb6491b39e',
      '58bf1b5ed5b3ab4e35bd5292',
      '61e65bac30295f001d1adb2f',
      '59c934e5fc37d738015a3daf',
      '56cb68ca5f55fd0f13f5d70c',
      '5930321d0a1dd25379bc9aa5',
      '5936e818b685523a341d9c3c',
      '5ebc1fa246587a0030d64072',
      '5a58d4763b5e0427eb26eefa',
      '59134abf4c49d2b46a0a7f3d',
      '59274b7c18c5530311c48505',
      '58f7b9119b289bb865d22d79',
      '5a1d7850ee2c28d29233098a',
      '58bf1209d5b3ab4e35bd528d',
      '5a256439c3e7897baeaa97ad',
      '592f21610a1dd25379bc964c',
      '56cb68ca5f55fd0f13f5d70b',
      '61e6531230295f001d1a5c32',
      '5953bf61db6086b0715ab5bb',
      '5a25708dc3e7897baeaa98bb',
      '5b0319140713fa0e8441a1d9',
      '5d0a5d9c4555bd5f97a13c36',
      '5eb07cd40fee75003335b650',
      '59cac6312a687f4d6350ecc8'],
  '5e626a09aec70300312162ff':
    ['5b3123e8287fb60d5fb6302b',
      '5cdd7f1726635f475594b284',
      '5cdd7f0626635f475594b282',
      '5cdd7f1026635f475594b283'],
  '5e6269b0aec70300312162d5':
    ['5cfa8c4923c46c7d99f7a020',
      '5f6d08cebb2e3c001d54a24a',
      '60590bcfdb1875001dddc950',
      '60107b542b56c7001da15b40',
      '6075d6b7455952001d7fd80c',
      '60a478965d169e001d4c0e5e',
      '6143b175b3d8cc001c141b66',
      '61f1b8b9fcc465001d2fc3fa',
      '61f1b6affcc465001d2f8ab7',
      '624c9fec8d8aa6001c49f5b7',
      '61aa48a618521b001d41c726',
      '62df03cb865a3f00306461b0',
      '62df0510865a3f003064819f',
      '62e430c27d5c10002f864823',
      '61f1a56bcecf13001d9e98a0',
      '61d759f6e6c5f6001ddf05cb',
      '63b885bbb1f674003fc164d1',
      '61f1b0d4fcc465001d2ed597',
      '61f1badcfcc465001d300054',
      '61f1b436fcc465001d2f4d85',
      '61fda0bb69f542001d4c8afe',
      '635a8f40ea6859002f6cdb6c',
      '624cb1a4da1963001c05bb79',
      '62df0462865a3f00306471fc',
      '624cb24fda1963001c05cddb',
      '624cb2fdda1963001c05e066',
      '62df04a9865a3f0030647810',
      '62df0435865a3f0030646ded',
      '62df044b865a3f003064703f',
      '62df0526865a3f003064831f',
      '62df0491865a3f0030647643',
      '62df047e865a3f00306474a9',
      '62e7fba3ea132c002f55e12f',
      '62df0579865a3f0030648bb0',
      '635a8f30ea6859002f6cd94d',
      '635a8f4dea6859002f6cdf13',
      '62df0526865a3f003064831f',
      '635a8f5eea6859002f6ce1b5',
      '636d4d6632be3d003777734d',
      '5cfe98901a7f0e0cfb19d55f'],
  '5e626b4faec7030031216314': ['5bd8b0744f2d2f4b7d429bf2', '615b3dc1cf2b1d001cfaff56'],
  '5e626cd5aec703003121637c':
    ['5d7a64ce06aa85eadca662b5',
      '5f89cbc69fa755001dd2e0c0',
      '5f89ce5f9fa755001dd2f4c5',
      '5f89cd3a9fa755001dd2ecfe',
      '603d5f2c304081001d68734b'],
  '6151f6295c64b5001cd9120f': ['6151f8535c64b5001cd96b84']
}

const getResidentsForFacilities = async (facilityIds, db) => {
  const residentCount = await db.collection('users').find({ status: 'active', type: 'resident', facilities: { $in: facilityIds } }).toArray();
  return residentCount.length;
}

const getFacilityIdsForCommunity = async (communityId, db) => {
  const community = await db.collection('communities').findOne({ _id: ObjectId(communityId) });
  const facilityIds = community?.facilities
  return facilityIds;
}

const getFacilityById = async (facilityId, db) => {
  const facility = await db.collection('facilities').findOne({ _id: ObjectId(facilityId) })
  return facility;
}

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const results = {};
  const tenantIds = Object.keys(dataMap).map(tenantId => ObjectId(tenantId));
  const globalDb = client.db('global-prod-lifeloop');
  const tenants = await globalDb.collection('tenants').find({ _id: { $in: tenantIds } }).toArray();
  for (const tenant of tenants) {
    if (tenant.url === 'dial') {
      console.log('skipping dial')
      continue;
    }
    console.log(`Searching in tenant: ${tenant.url}`)
    const db = client.db(tenant.url);
    const facilityOrCommunities = dataMap[tenant._id];
    for (const facilityOrCommunityId of facilityOrCommunities) {
      console.log(`Searching ID: ${facilityOrCommunityId}`)
      const facility = await getFacilityById(facilityOrCommunityId, db);
      let activeResidentCount = 0;
      if (facility) {
        activeResidentCount = await getResidentsForFacilities([facility._id], db)
        console.log(`Facility Residents: ${activeResidentCount}`)
        if (results[`${tenant._id}.${facility._id}`]) {
          results[`${tenant._id}.${facility._id}`] += activeResidentCount;
        } else {
          results[`${tenant._id}.${facility._id}`] = activeResidentCount
        }
        console.log(`Running Totals`)
        console.log({ results })
        continue;
      }
      console.log(`Not a facility, searching communities`)
      const facilities = await getFacilityIdsForCommunity(facilityOrCommunityId, db);
      console.log(`Found facilities for community: ${facilities}`)
      activeResidentCount = await getResidentsForFacilities(facilities, db)
      if (results[`${tenant._id}.${facilityOrCommunityId}`]) {
        results[`${tenant._id}.${facilityOrCommunityId}`] += activeResidentCount;
      } else {
        results[`${tenant._id}.${facilityOrCommunityId}`] = activeResidentCount
      }
      console.log(`Community Residents ${activeResidentCount}`)
      console.log(`Running Totals`)
      console.log({ results })
    }
  }
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());


