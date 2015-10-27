// set initial variables
var $digits,
	$operators,
	$answer,
	$x,
	$y,
	$operator;

$(function(){
	firstLoad();
});

function firstLoad(){
	initVars();
	getDigits();
	getOperators();
}

// function to set dom vars, etc that will not change
function initVars(){
	$digits 	= $('.digit');
	$operators 	= $('.operator');
	$answer 	= $('.answer');
}



function getDigits(){
	$digits.click(function(event){						// I don't get how x and y are being set by anything
	    var $value = event.target.value;				// I also feel like there are too many $ everywhere, but I can't make anything happen without them
	    if (!$x && !$operator) {
	      $x = $value;
	    } else if($x && !$operator) {
	      $x += $value;
	    } else if (!$y && $operator) {
	      $y = $value;
	    } else if($y && $operator) {
	      $y += $value;
	    }
	    $answer.value += $value;


	   	$answer.val($value);


	    // console.log($answer.value);

	 //    var answer = $value.text();
		// $value.html();
  });
};



function getOperators(){
	$operators.click(function(event){
	    var $value = event.target.value;
	    if ($value !== '=') {
	      $operator = $value;
	      $answer.value += $value;
	    } else {
	      $x = eval($x + $operator + $y);
	      $y = undefined;
	      $operator = undefined;
	      $answer.value = $x;
    }
  });
};



