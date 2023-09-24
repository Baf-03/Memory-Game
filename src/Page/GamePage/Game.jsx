  import React, { useEffect, useState } from "react";
  import Card from "../../Components/Card";

  function Game() {
    let [Clicked_elements, set_Clicked_elements] = useState([]);
    let [Completed,setCompleted] =useState(false)
    
    let [data, setData] = useState([
      {
        name: "fish",
        visibility: "True",
        isflip:"false",
        background : "https://cdn.pixabay.com/photo/2023/08/17/02/25/fish-8195323_1280.jpg",
      }, {
        name: "fish",
        visibility: "True",
        isflip:"false",
        background : "https://cdn.pixabay.com/photo/2023/08/17/02/25/fish-8195323_1280.jpg",

      }, 
      {
        name: "monkey",
        visibility: "True",
        isflip:"false",
        background : "https://img.freepik.com/premium-photo/monkey-wearing-yellow-jacket-jacket-with-word-monkey-it_661214-3091.jpg",

      },{
        name: "monkey",
        visibility: "True",
        isflip:"false",
        background : "https://img.freepik.com/premium-photo/monkey-wearing-yellow-jacket-jacket-with-word-monkey-it_661214-3091.jpg",

      },
      {
        name: "banana",
        visibility: "True",
        isflip:"false",
        background : "https://images7.alphacoders.com/367/367377.jpg",

      },
    
      
      {
        name: "banana",
        visibility: "True",
        isflip:"false",
        background : "https://images7.alphacoders.com/367/367377.jpg",

      },
    
      //----------------------------------------------------------------------------------
      {
        name: "Apple",
        visibility: "True",
        isflip:"false",
        background : "https://img.freepik.com/free-vector/red-apple-white-background_1308-103018.jpg",

      },
      {
        name: "Apple",
        visibility: "True",
        isflip:"false",
        background : "https://img.freepik.com/free-vector/red-apple-white-background_1308-103018.jpg",

      },
      {
        name: "waterMelon",
        visibility: "True",
        isflip:"false",
        background : "https://img.freepik.com/premium-photo/fruit-watermelon-generated-by-ai-artificial-intelligence_1417-19713.jpg",

      }, 
      {
        name: "waterMelon",
        visibility: "True",
        isflip:"false",
        background : "https://img.freepik.com/premium-photo/fruit-watermelon-generated-by-ai-artificial-intelligence_1417-19713.jpg",

      },
      {
        name: "bird",
        visibility: "True",
        isflip:"false",
        background : "https://img.freepik.com/free-photo/bird-with-yellow-head-blue-eyes-sits-branch-purple-flowers_1340-38641.jpg",

      },
      {
        name: "bird",
        visibility: "True",
        isflip:"false",
        background : "https://img.freepik.com/free-photo/bird-with-yellow-head-blue-eyes-sits-branch-purple-flowers_1340-38641.jpg",
      },
    ]);


    let previousIndex;
    let currentIndex;
    let updatedData;
    let [total_cards, setTotalCards] = useState(12);


    let [letclosetimecards,Setclosetimecards] =useState("true");
    
    function shuffle(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      setData(array)

  }
  useEffect(()=>{
    shuffle(data)
  },[])  
    useEffect(()=>{
        console.log(data)
        previousIndex = Clicked_elements[0];
        currentIndex = Clicked_elements[1];
        updatedData = [...data];
    })

      
    const handleCardClickParent = (index) => {
      updatedData[index].isflip="true"
      console.log(data)
      if (Clicked_elements.length < 2 && previousIndex!=index) {

        Clicked_elements.push(index)
        set_Clicked_elements( [...Clicked_elements]);
      
      } else if (Clicked_elements.length < 2 ) {
        console.log("remanin same",Clicked_elements)
      } else {
        set_Clicked_elements([]);
      } 
    };
    useEffect(() => {
      console.log(Clicked_elements);
      if (Clicked_elements.length === 2 ) {
        //this is run only when  the user have selected two cards it prevents on accessing when it is 1 
        const previousIndex = Clicked_elements[0];
        const currentIndex = Clicked_elements[1];
      
    
        if (updatedData[previousIndex].name === updatedData[currentIndex].name) {
          //this else will run when u selected two same cards
          setTimeout(()=>{
            
            updatedData[previousIndex].visibility = "false";
            updatedData[currentIndex].visibility = "false";
            setData([...updatedData]);
            Setclosetimecards("true");
            //by doing this these cards will disappear from ui but their space will be reserved i made it false and conditonal rendering in card.jsx
            console.log("same");
            setTotalCards(total_cards - 1);
          },400)
          total_cards-=1;
          console.log("cards",total_cards)
        
        } else {
          //this else will run when u selected two different cards
          console.log("different");
          //disabling it so cannot click anyother card till both get hidden from ui

          // Setclosetimecards("false")
          setTimeout(() => {
            updatedData[previousIndex].isflip = "false";
            updatedData[currentIndex].isflip = "false";
            setData([...updatedData]); // Update the state
            Setclosetimecards("true")
            console.log("how r u");

          },500);
        }
        setData([...updatedData]); // Update the state
        set_Clicked_elements([]);
      }
    }, [Clicked_elements, data]);
    
    const restartGame = () => {
      console.log("Restarting game...");
      set_Clicked_elements([]);
      setCompleted(false);
      Setclosetimecards("true");
    
      // Shuffle the data after resetting the state
      const shuffledData = [...data];
      shuffle(shuffledData);
      setData(shuffledData);
    }
    const HandleComplete = () => {
      setCompleted(true); // Set to true when the game is completed
    }
    useEffect(() => {
      console.log("cards",total_cards);
      if (total_cards === 0) {
        HandleComplete();
      }
    }, [total_cards]);
    return (
      <>
        <div className="w-[100%] h-[100vh] mx-auto flex items-center flex-col flex-wrap">
          <div className="font-bold text-white md:text-[3rem] text-center mt-5">
            MEMORY GAME
          </div>

          <div className="flex justify-center items-center w-[100%] h-fit lg:w-[90%] xl:w-[50%] p-5 flex-wrap gap-2 md:gap-3 lg:gap-8 xl:gap-12 mt-5 ">
            {Completed ? (
              <div className="text-white">
                Completed Try again
                <div onClick={restartGame} className="text-white "> Play Again</div>
              </div>
            ) : (data.map((item, index) => {
              return (
                <div key={index} className="">
                  {letclosetimecards === "true" ? (
                    <div onClick={() => handleCardClickParent(index)} key={index}>
                      <Card
                        key={index}
                        value={item.name}
                        visibility={item.visibility}
                        isflip={item.isflip}
                        letclosetimecards={letclosetimecards}
                        bg_img={item.background}
                      />
                    </div>
                  ) : (
                    <Card
                      key={index}
                      value={item.name}
                      visibility={item.visibility}
                      isflip={item.isflip}
                      letclosetimecards={letclosetimecards}
                    />
                  )}
                </div>
              );
            }))}
          </div>
        </div>
      </>
    );
  }
  export default Game;