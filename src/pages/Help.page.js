const Help = () => (
    <main className="help">
      <h2>Help</h2>
      <hr />
      <h4>- I need to know Mark down?</h4>
      <p>
        Not really. You can use just normal text to write your notes without
        problems.
      </p>
      <p>
        If you dont know about <b>Mark down</b> you can visit
        <a href="https://www.markdownguide.org/basic-syntax/" target="_blank">
          markdownguide.org
        </a>
        to learn how the syntax is and make your notes looks better.
      </p>
      <div className="help-note">
        <p>
          🔵 If u save a note with Mark down text you wont be able to change it
          later
        </p>
      </div>

      <h4>- My notes will be save forever?</h4>
      <p>
        No. remember that your notes will be save on the localStorage of ur
        browser so you can save just <b>5mb</b> ... but dont worry. if you write
        some notes of 500 characters you will have to write 10.000 notes to get
        full 5mb
      </p>
    </main>
  );

export default Help;
