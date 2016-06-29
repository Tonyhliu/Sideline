const SessionApiUtil = {
  signup(user, success, error) {
    $.ajax({
      url: '/api/users',
      type: 'POST',
      dataType: 'json',
      data: { user },
      success,
      error(xhr) {
        const errors = xhr.responseJSON;
        error("signup", errors);
      }
    });
  },

  logIn(user, success, error) {
		$.ajax({
			url: '/api/session',
			type: 'POST',
			data: { user },
			success(resp) {
        success(resp);
      },
			error(xhr) {
				const errors = xhr.responseJSON;

				error("login", errors);
			}
		});
  },

  logout(cb) {
    $.ajax({
      url: '/api/session',
      method: 'DELETE',
      success: function() {
        cb();
      },
      error: function() {
        console.log("Logout error in SessionApiUtil#logout");
      }
    });
  }
};


module.exports = SessionApiUtil;
