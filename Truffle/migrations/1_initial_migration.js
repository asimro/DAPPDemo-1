const Counters = artifacts.require("Counters");
const DAPDemo1 = artifacts.require("DAPDemo1");

module.exports = async function (deployer) {
  await deployer.deploy(Counters);
  await deployer.link(Counters, DAPDemo1);
  
  await deployer.deploy(DAPDemo1);
};
