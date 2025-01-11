// I need to add my SQL queries here when I have written them. I will have to import it from the server file, as it is in a database pool there.

CREATE TABLE JuicyJakesGuestbook (
    id INT PRIMARY KEY,
    name VARCHAR (999),
    date_of_visit DATE NOT NULL,
    your_comments VARCHAR (999) NOT NULL, 
    would_you_recommend_us BOOLEAN
  );

// Above is the table I've made in SQL editor. Leaving it here for now before I import it properly.