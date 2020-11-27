/*
Time Difference
Have the function TimeDifference(strArr) read the array of strings stored in strArr which will be an unsorted list of times in a twelve-hour format like so: HH:MM(am/pm). Your goal is to determine the smallest difference in minutes between two of the times in the list. For example: if strArr is ["2:10pm", "1:30pm", "10:30am", "4:42pm"] then your program should return 40 because the smallest difference is between 1:30pm and 2:10pm with a difference of 40 minutes. The input array will always contain at least two elements and all of the elements will be in the correct format and unique.

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/
/*Test CAses
. For input ["2:10pm", "1:30pm", "10:30am", "4:42pm"] output 40

2. For input ["11:12am", "5:10pm", "11:11am", "9:23pm"] output: 1

3. For input ["10:00am", "11:45pm", "5:00am", "6:02am", "5:02pm"] output: 62

4. For input ["2:10pm", "1:30pm", "10:30am", "10:00am", "4:42pm"] output: 30
*/

function TimeDifference(strArr){
    let newArray = strArr.map(element => {
        let newStr = element.replace(/:/g,'')
        let strWithoutpam = ''
        if(newStr.endsWith('pm')){
            strWithoutpam = newStr.slice(0,-2);
            if(strWithoutpam.length === 3){
                strWithoutpam = parseInt(strWithoutpam.charAt(0)) + 12 + strWithoutpam.slice(1);
            }
            else{
                strWithoutpam = parseInt(strWithoutpam.slice(0,2)) + 12 + strWithoutpam.slice(2);
            }
        }
        else{
            strWithoutpam = newStr.slice(0,-2)
        }
        return strWithoutpam;
    });
    newArray.sort((a,b)=> a-b);
    // console.log(newArray);
    // newArray is sorted from the am to pm, I removed the pm and am, the new array is formated in the 24 hours so 1:30pm is now 1330

    let minimumDiff = [];
    for(let i = 0; i < newArray.length; i++){
        for(let j = i+1; j < newArray.length; j++){
            let time1 = parseInt(newArray[i]);
            let time2 = parseInt(newArray[j]);
            
            let hourDiffInHours;
            let minuteDiff;
            let hourDiffInMinutes;
            let totalDiff;

            if(parseInt(time2/100) == parseInt(time1/100)){
                hourDiffInHours = Math.abs(parseInt(time2/100) - parseInt(time1/100));
                minuteDiff = Math.abs(parseInt(time2 % 100) - parseInt(time1 % 100));
            }
            else {
                hourDiffInHours = Math.abs(parseInt(time2/100) - parseInt(time1/100) -1);
                minuteDiff = Math.abs(time2 % 100 + (60 - time1 % 100))
            }
            hourDiffInMinutes = hourDiffInHours*60;
            
            totalDiff = hourDiffInMinutes + minuteDiff;
            minimumDiff.push(totalDiff);
        }
    }
    return Math.min.apply( Math, minimumDiff );
}
console.log(TimeDifference(["2:10pm", "1:30pm", "10:30am", "4:42pm"])); //Output: 40
console.log(TimeDifference(["11:12am", "5:10pm", "11:11am", "9:23pm"])); // Output: 1
console.log(TimeDifference(["10:00am", "11:45pm", "5:00am", "6:02am", "5:02pm"])); // Output: 62
console.log(TimeDifference(["2:10pm", "1:30pm", "10:30am", "10:00am", "4:42pm"])); // Output: 30
console.log(TimeDifference(["00:01am", "00:59am"])); // Output: 58