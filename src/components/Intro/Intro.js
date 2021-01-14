function Intro() {
    return <div>
        <h1>PoW Blockchain Visual Representation</h1>
        <ul>
            <li><b>Prev. Hash: </b>The hash of the previous block. All the blocks (except for the starting block) have a reference to the hash of the previous block.</li>
            <li><b>Payload: </b>The actual information to be stored.</li>
            <li><b>Nonce: </b>An arbitrary number added by the miner to make the hash of the whole block comply with an arbitrary rule set by the network. In this example the hash needs
            to start with an amount of 0's set by the difficulty level.</li>
            <li><b>Hash: </b>The result of the cryptographic hash function when using all the fields of the block as input.</li>
            <li><b>Difficulty: </b>How many 0's should the mined hash start with.</li>
        </ul>
        <p>When a new block is added it will automatically copy the hash of the previous block, but be aware that if the hash of the previous block changes, for example after
            modifying the payload and re-mining a block, you will have to manually copy the new resulting hash into the "Prev. Hash" field of the next block, this behavior is intentional
            as it helps to better grasp the concept of the blockchain.
        </p>
    </div>;
}

export default Intro;