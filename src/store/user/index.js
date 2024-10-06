import StoreModule from '../module';

/**
 * Детальная информация о пользователе
 */
class UserState extends StoreModule {
  initState() {
    return {
      token: localStorage.getItem('token') || '',
      username: localStorage.getItem('username') || '',
    };
  }
  async getToken(loginData) {
    const response = await fetch('/api/v1/users/sign', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      const json = await response.json();
      throw new Error(json.error.data.issues[0].message);
    }

    const json = await response.json();
    console.log('Успешный вход:', json);
    this.setState({
      ...this.getState(),
      token: json.result.token,
      username: json.result.user.profile.name,
    });
    localStorage.setItem('token', json.result.token);
    localStorage.setItem('username', json.result.user.profile.name);
  }

  async resetState() {
    await this.revokeToken();
    this.setState({ ...this.initState() });
  }

  async revokeToken() {
    const response = await fetch('/api/v1/users/sign', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-token': this.getState().token,
      },
    });
    if (!response.ok) {
      const json = await response.json();
      throw new Error(json.error.message);
    }
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }
}

export default UserState;
