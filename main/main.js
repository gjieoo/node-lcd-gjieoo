/**
 * Created by guojie on 16-5-5.
 */
function printLcdNum(number,inputs)
{
    var numString=numToString(number);
    var lcdDigits=buildLcdDigits(numString,inputs);
    var lcdString=toLcdString(lcdDigits);

    console.log(lcdString);
}

function numToString(number)
{
    var numString=number.toString();
    var numberString=numString.split('');
    return numberString;
}


function buildLcdDigits(numString,inputs)
{

    var nString=['0','1','2','3','4','5','6','7','8','9'];
    var lcdDigits=[];

    for(var i=0;i<numString.length;i++)
    {
        for(var j=0;j<nString.length;j++)
        {
            if(numString[i]===nString[j])
            {
                lcdDigits.push(inputs[0][j]);
                lcdDigits.push(inputs[1][j]);
                lcdDigits.push(inputs[2][j]);
            }
        }
    }

    return lcdDigits;

}

function toLcdString(lcdDigits)
{
    var lcdString="显示结果为：";
    for(var j=0;j<3;j++)
    {
        lcdString+='\n';
        for(var i=0;i<lcdDigits.length;)
        {
            lcdString += lcdDigits[i+j];
            i+=3;
        }

    }
    return lcdString;
}

module.exports={
    
    numToString:numToString,
    buildLcdDigits:buildLcdDigits,
    toLcdString:toLcdString,
    printLcdNum:printLcdNum
    
};