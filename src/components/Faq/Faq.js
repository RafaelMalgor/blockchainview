function Faq() {
    return <div>
        <h1>FAQ</h1>
        <ul>
            <li>What is this?: It is a visual representation of the basic concepts behind a Proof of Work blockchain.</li>
            <li>What can I do with it?: You can play around with it. <ul>
            <li>You can add a new block and type in a payload.</li>
            <li>You can add mine the block to get it validated.</li>
            <li>You can tamper with the payload and see how blocks become invalid.</li>
            <li>You can increase the difficulty and see how it takes longer to mine (if you go too crazy the browser tab might crash).</li>
            </ul></li>
            <li>
                Is this a real blockchain?: No, not at all. This is a visual representation done for didactic purposes. 
            </li>
        </ul>
    </div>;
}

export default Faq;