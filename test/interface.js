const index = require('../index.js');
const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');

describe('Constants CRUD', function(){
    it('should add and retrieve new constant', function(){
        expect(index.funny).to.be.undefined;
        index.add('funny', 1234);
        expect(index.funny).to.be.equal(1234);
    });
    it('should not update constant', function(){
        expect(index.funny).to.be.equal(1234);
        index.add('funny', 200);
        expect(index.funny).to.be.equal(1234);
    });
    it('should not delete constant', function(){
        expect(index.funny).to.be.equal(1234);
        index.add('funny', undefined);
        expect(index.funny).to.be.equal(1234);
    });
    it('should auto setup based on path of file specified in .config file in project', function(done){
        setTimeout(function(){
            if (index.dynamic === 'this world'){
                done();
            }
            else{
                done(new Error('.config file has not been read'));
            }
        }, 500);
    });
});
