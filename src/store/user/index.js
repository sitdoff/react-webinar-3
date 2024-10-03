import StoreModule from '../module';

/**
 * Детальная информация о пользователе
 */
class UserState extends StoreModule {
  initState() {
    return {
      token: '',
      username: '',
      profile: {},
      email: '',
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
    // console.log(JSON.stringify(loginData));

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
  }
  async getProfile() {
    const response = await fetch('/api/v1/users/self?fields=profile,email', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-token': this.getState().token,
      },
    });
    if (!response.ok) {
      const json = await response.json();
      throw new Error(json.error.message);
      // console.log(json.error.message);
    }
    const json = await response.json();
    // console.log('getProfile json', json);
    this.setState({ ...this.getState(), profile: json.result.profile, email: json.result.email });
    // console.log('getProfile', json.result.profile);
  }
  resetState() {
    this.setState({ ...this.initState() });
  }
}

export default UserState;
