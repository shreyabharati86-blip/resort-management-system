function WhyChoose() {
  return (
    <section className="why-section">
      <div className="why-content">
        <p className="section-label">WHY CHOOSE ROYAL HAVEN</p>

        <h2>More Than Just A Stay</h2>

        <p>
          At Royal Haven, we focus on creating memorable experiences,
          not just providing a room.
        </p>

        <div className="why-list">
          <div>
            <span>✓</span>
            <div>
              <h3>Beautiful Location</h3>
              <p>Peaceful surroundings away from the busy city.</p>
            </div>
          </div>

          <div>
            <span>✓</span>
            <div>
              <h3>Premium Comfort</h3>
              <p>Comfortable rooms with modern facilities.</p>
            </div>
          </div>

          <div>
            <span>✓</span>
            <div>
              <h3>Warm Hospitality</h3>
              <p>Friendly service to make you feel at home.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="why-image">
        <img
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=80"
          alt="Resort"
        />
      </div>
    </section>
  );
}

export default WhyChoose;