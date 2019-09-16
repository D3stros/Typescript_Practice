let message;
message = "abc";
// 2 ways of type assertion
let endsWithC = (<string>message).endsWith("c");
let alternativeWay = (message as string).endsWith("c");
