import "../index.css";

export const Cards = ({rank, name, easy, medium, hard, points}) => {
    console.log('Cards received props:', { rank, name, easy, medium, hard, points });
    return(

        <div> 
            <div className="level-wave">
                <div className="level-info">
                    <div className="stat-label " >Rank</div>
                    <div className="stat-value">{rank}</div>
                </div>

                <div className="level-info"> 
                    <div className="stat-label " >Name</div>
                    <div className="stat-value">{name}</div>
                </div>

                <div className="level-info">
                    <div className="stat-label " >Easy solved</div>
                    <div className="stat-value">{easy}</div>
                </div>

                <div className="level-info">
                    <div className="stat-label " >Medium solved</div>
                    <div className="stat-value">{medium}</div>
                </div>

                <div className="level-info">
                    <div className="stat-label " >Hard solved</div>
                    <div className="stat-value">{hard}</div>
                </div>

                <div className="level-info">
                    <div className="stat-label " >Points</div>
                    <div className="stat-value blinking-text">{points}</div>
                </div>

                
            </div>
            
            {/* <img src="" alt="logo" className="logo"/> */}
        </div>
    )

}

export default Cards;
