import { toast } from "react-toastify";

const Player = ({ player, setAvailableBalance, availableBalance, setPurchasedPlayers, purchasedPlayers}) => {
  const {
    playerImage,
    playerName,
    country,
    playerType,
    playerRating,
    bowlingStyle,
    battingStyle,
    playerPrice,
  } = player;
  

  const price = parseInt(playerPrice.split("$").join("").split(",").join(""))
  
  const handleClicked = (player) => {
    if(purchasedPlayers.length >= 6){
      toast("6 Players already Selected")
      return
    }
    if(availableBalance < price){
      toast("Unavailable Coin")
      return
    }
    setAvailableBalance(availableBalance - price)
    setPurchasedPlayers([...purchasedPlayers, player])
    toast("Player Selected")
  }

  return (
    <div className="p-5 border border-gray-300 rounded-xl shadow-lg">
      <img
        className="rounded-xl h-56 w-full object-cover"
        src={playerImage}
        alt=""
      />
      <h1 className="font-semibold text-xl mt-6 mb-4">{playerName}</h1>
      <div className="flex justify-between items-center mb-4 ">
        <span className="text-gray-500 font-semibold">{country}</span>
        <span className="py-2 px-4 rounded-lg bg-gray-300">{playerType}</span>
      </div>
      <hr className="text-gray-300" />
      <div className="border-s-gray-300 space-y-3 mt-4 font-semibold">
        <div className="flex justify-between items-center">
          <p>Rating </p>
          <span className="font-bold">{playerRating}</span>
        </div>
        <div className="flex justify-between items-center">
          <span>{bowlingStyle}</span>
          <span>{battingStyle}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold">Price: {playerPrice}</span>
          <button
            disabled={purchasedPlayers.some(anything => anything.playerName === playerName)}
            onClick={() => handleClicked(player)}
            className="btn py-2 px-4 rounded-lg border border-gray-200 cursor-pointer"
          >
            {purchasedPlayers.some(anything => anything.playerName === playerName) ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
