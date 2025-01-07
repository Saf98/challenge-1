function FizzBuzz(num) {
    //Init Array 1..
    const arr = [];
    for (i = 1; i <= num; i+= 1) {
        arr.push(i);
    }

    const Fizz = "Fizz";
    const Buzz = "Buzz";
    const transformed = arr?.map((element, index) => {
        const isDivThree = element % 3 === 0 ;
        const isDivFive = element % 5 === 0;
         if (isDivThree && isDivFive) {
            return arr[index] = Fizz+Buzz;
        }

        if (isDivThree) {
            return arr[index] = Fizz;
        }

        if (isDivFive) {
            return arr[index] = Buzz;
        }

        return element;
    });

    return transformed
};

module.exports = FizzBuzz;