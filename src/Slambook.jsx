import React from "react";
import "./SlamBook.css";  // Link to external CSS
const SlamBook = () => {
  return (
    <div className="slam-book-container">
        <span className="slam-book-container-title">  SLAM BOOK </span>

        <form>
          {/* Name */}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>

          {/* Nickname */}
          <div className="form-group">
            <label htmlFor="nickname">Nickname:</label>
            <input type="text" id="nickname" placeholder="Enter your nickname" />
          </div>

          {/* Address */}
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" placeholder="Enter your address" />
          </div>

          {/* Phone */}
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" placeholder="Enter your phone number" />
          </div>

          {/* Gender */}
          <div className="form-group">
            <label>Gender:</label>
            <label>
              <input type="radio" name="gender" value="male" /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" /> Female
            </label>
          </div>

          {/* Favorite Actors */}
          <div className="form-group">
            <label>Favorite Actors:</label>
            <label>
              <input type="checkbox" name="actors" value="actor1" /> Vijay
            </label>
            <label>
              <input type="checkbox" name="actors" value="actor2" /> Surya
            </label>
            <label>
              <input type="checkbox" name="actors" value="actor3" /> Ajith
            </label>
            <label>
              <input type="checkbox" name="actors" value="actor4" /> Rajini
            </label>
          </div>

          {/* School */}
          <div className="form-group">
            <label htmlFor="school">School:</label>
            <select id="school">
              <option value="school1">School A</option>
              <option value="school2">School B</option>
              <option value="school3">School C</option>
              <option value="school4">School D</option>
              <option value="school5">School E</option>
            </select>
          </div>

          {/* Memories */}
          <div className="form-group">
            <label htmlFor="memories">Memories:</label>
            <textarea id="memories" placeholder="Share your memories"></textarea>
          </div>

            <button type="submit" className="submit-btn"> Submit </button>
        </form>
      </div>

  );
};

export default SlamBook;