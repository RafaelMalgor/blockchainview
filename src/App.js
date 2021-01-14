import './App.css';
import BlockView from './components/BlockView/BlockView';
import Block from './models/Block';
import { useState } from 'react';
import { validateBlockChain } from './utils/blockchain';
import Intro from './components/Intro/Intro';
import Faq from './components/Faq/Faq';
import BlockchainView from './components/BlockchainView/BlockchainView';

function App() {

  const [total, setTotal] = useState(1);

  const [difficulty, setDifficulty] = useState(1);

  const [blocks, setBlocks] = useState([new Block(1, null, "Starting Block", difficulty)]);
  const updateBlock = (updatedBlock) => {
    let block = (blocks.filter((block) => { return block.id == updatedBlock.id }))[0];
    block.payload = updatedBlock.payload;
    block.prevHash = updatedBlock.prevHash;

    validateBlockChain(blocks);
    setBlocks([...blocks]);
  };

  const mineBlock = (id) => {
    let block = (blocks.filter((block) => { return block.id == id }))[0];
    block.mine();
    validateBlockChain(blocks);
    setBlocks([...blocks]);
  };

  const addBlock = () => {
    const newTotal = total + 1;
    let last = blocks[blocks.length - 1];
    let newBlocks = blocks.concat(new Block(newTotal, last.hash, "", difficulty));
    validateBlockChain(newBlocks);
    setBlocks(newBlocks);
    setTotal(newTotal);
  };

  const blockViews = blocks.map((block) => {
    return <li><BlockView block={block} onUpdateBlock={updateBlock} onMine={mineBlock}></BlockView></li>
  });

  return (
    <div className="App">
      <div className="container">
        <Intro></Intro>
      </div>
      <div className="container">
        <label>New block difficulty</label>
        <input type="text" value={difficulty} onChange={(event) => setDifficulty(event.target.value)}></input>
        <button onClick={addBlock}>Add</button>
      </div>
      <div className="container">
        <BlockchainView blocks={blocks} onMine={mineBlock} onUpdateBlock={updateBlock}></BlockchainView>
      </div>
      <div className="container">
        <Faq></Faq>
      </div>
    </div>
  );
}

export default App;
