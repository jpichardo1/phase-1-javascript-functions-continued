const saturdayFun = function(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  };
  console.log(saturdayFun());
  console.log(saturdayFun("bathe my dog!"));

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  console.log(mondayWork());

  const wrapAdjective = (flair = "*") => {
    return (adjective = "special") => {
      return `You are ${flair}${adjective}${flair}!`;
    };
  };
  
  const result = wrapAdjective("*")("a hard worker", "*");
  console.log(result);
  
  const result2 = wrapAdjective("|")("a dedicated programmer", "|");
  console.log(result2);