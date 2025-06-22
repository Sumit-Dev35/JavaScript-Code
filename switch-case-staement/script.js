const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan Course Strcuture");
    console.log("Go to coidng Meetup");
    break;
  case "tuesday":
    console.log("Prepare Theory Videoes");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write Code Examples");
    break;
  case "friday":
    console.log("Record Videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend !");
    break;
  default:
    console.log("Not a valid day !");
}
