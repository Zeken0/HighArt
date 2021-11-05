export default function testInputLength(
  inputToTest,
  lengthDesired,
  theDomElementToTarget
) {
  if (inputToTest.length >= lengthDesired) {
    theDomElementToTarget.classList.add("hide");
    theDomElementToTarget.classList.remove("show");
  } else {
    theDomElementToTarget.classList.add("show");
    theDomElementToTarget.classList.remove("hide");
  }
}
