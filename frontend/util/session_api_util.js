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

  update(user, success, error) {
    console.log(user);
    $.ajax({
      url: `/api/users/${user.user_id}`,
      type: 'PATCH',
      data: { user },
      success(resp) {
        success(resp);
      },
      error(xhr) {
        const errors = xhr.responseJSON;

        error("update", errors);
      }
    });
  },

  logout(cb) {
    $.ajax({
      url: '/api/session',
      method: 'DELETE',
      success: function(resp) {
        cb(resp);
      },
      error: function() {
        console.log("Logout error in SessionApiUtil#logout");
      }
    });
  }
};


module.exports = SessionApiUtil;
