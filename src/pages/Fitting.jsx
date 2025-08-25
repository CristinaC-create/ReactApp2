export default function Fitting() {
  return (
    <div className="fitting-container">
      <h1>Book a Fitting</h1>
      <p>Get custom-fit clubs with our PGA-certified experts.</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Booking confirmed! 🏌️‍♂️");
        }}
      >
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="date" required />
        <input type="time" required />
        <button type="submit" className="btn btn-primary">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}