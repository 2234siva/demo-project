let nums = [2, 7, 10, 1, 11, 15, 9]
for(let i=0;i<nums.length;i++){
    for(let j=0;j<=i;j++){
        if(nums[i]+nums[j]==11)
        {
            cosole.log(nums[i],nums[j]);
        }
        else{
            cosole.log("The pair not found");
        }
    }
}