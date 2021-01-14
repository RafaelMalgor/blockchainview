import style from './BlockView.module.css';

function BlockView(props) {

    let handleChange = (block) => {
        props.onUpdateBlock(block);
    };

    let onMineClicked = () => {
        props.onMine(props.block.id);
    };

    return <div className={style.block + ' ' + (!props.block.valid ? style.invalid : '')}>
        <label>Prev. Hash</label>
        <input type="text" value={props.block.prevHash} onChange={(event) => handleChange({ ...props.block, prevHash: event.target.value })}></input>
        <label>Payload</label>
        <textarea value={props.block.payload} onChange={(event) => handleChange({ ...props.block, payload: event.target.value })}></textarea>
        <label>Nonce</label>
        <input type="text" value={props.block.nonce} readOnly></input>
        <label>Hash</label>
        <input type="text" value={props.block.hash} readOnly></input>
        <button className={style.button} onClick={onMineClicked}>Mine!</button>
    </div>
}

export default BlockView;