import BlockView from "../BlockView/BlockView";
import style from './BlockChainView.module.css';

function BlockchainView(props) {
    const blockViews = props.blocks.map((block) => {
        return <li className={style.block}><BlockView block={block} onUpdateBlock={props.onUpdateBlock} onMine={props.onMine}></BlockView></li>
    });

    return <div>
        <div className={style.legs}> 
            <div className={style.validleg}></div>
            <div>Valid</div>
        </div>
        <div className={style.legs}>
            <div className={style.invalidleg}></div>
            <div>Invalid</div>
        </div>
        <ul className={style.blocks}>
            {blockViews}
        </ul>
    </div>;
}

export default BlockchainView;