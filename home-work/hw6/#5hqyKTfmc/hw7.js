


let nums = [11,21,3];

function sortNums(nums,direction) {

        if (direction === 'ascending') {
            return nums.sort((a, b) => a - b);
        }
        else if (direction === 'descending') {
            return nums.sort((a, b) => b - a);
        }
        else {
        return 'direction is wrong';}


}

console.log(sortNums(nums,'descending'));