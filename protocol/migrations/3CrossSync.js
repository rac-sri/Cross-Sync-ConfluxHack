const Migrations = artifacts.require('CrossSync');

module.exports = function (deployer) {
	deployer.deploy(Migrations);
};
