var assert = require("assert");
var lzmajs = require('../');
var fs = require('fs');

describe('lzma file decode', function(){
  var LZMA = lzmajs.LZMA.LZMA;
  ['sample0', 'sample1', 'sample2', 'sample3', 'sample4'].forEach(function(f) {
      it('should correctly decode '+f, function() {
          var compressedData = fs.readFileSync('test/'+f+'.lzma');
          var referenceData = fs.readFileSync('test/'+f+'.ref');
          var data = LZMA.decompressFile(compressedData);
          // convert to buffer
          data = new Buffer(data);
          assert.equal(data.toString('hex'), referenceData.toString('hex'));
      });
  });
});