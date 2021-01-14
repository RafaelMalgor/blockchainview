const validateBlockChain = (blocks) => {
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i].validate() && (i == 0 || (blocks[i - 1].hash == blocks[i].prevHash && blocks[i - 1].valid))) {
        blocks[i].valid = true;
      }
      else {
        blocks[i].valid = false;
      }
    }
  }

  export {validateBlockChain};