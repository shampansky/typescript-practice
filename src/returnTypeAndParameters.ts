// write a function.
function checkStringLength(str: string, length: number) {
  return str.length > length;
}
// Create a type which has return type of that function
type CheckStringLengthReturn = ReturnType<typeof checkStringLength>;

// Create a type which has return type of function parameters
type CheckStringLengthParams = Parameters<typeof checkStringLength>;
