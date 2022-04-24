const chai = require('chai');
const Reservation = require('../../../../lib/schema/reservation');
const should = chai.should();

describe('Reservation Schema', function () {
	it('should return ISO 8601 date and time with valid input', function () {
		const date = '2022/04/22';
		const time = '05:06 AM';

		Reservation.combineDateTime(date, time)
		.should.equal('2022-04-22T05:06:00.000Z');
	});

	it('should be null on wrong date format', function () {
		const date = "%@F$";
		const time = "@!%#";
		should.not.exist(Reservation.combineDateTime(date, time));
	})

	context('Validate', function() {
    it('should pass a valid reservation with no optional fields', function() {
      const reservation = new Reservation({
        date: '2017/06/10',
        time: '06:02 AM',
        party: 4,
        name: 'Family',
        email: 'username@example.com'
      });
			reservation.validator(function(error, value) {
				value.should.deep.equal(reservation);
				done(error)
			})
    });

    it('should fail an invalid reservation with a bad email', function() {
      const reservation = new Reservation({
        date: '2017/06/10',
        time: '06:02 AM',
        party: 4,
        name: 'Family',
        email: 'username'
      });

      return reservation.validator(reservation)
        .catch(error => error.should.be.an('error').and.not.be.null);
    });
  });
})

