import StoreModule from '../module';

class Profile extends StoreModule {
  initState() {
    return {
      profile: {},
      email: '',
    };
  }
  async getProfile(token) {
    const response = await fetch('/api/v1/users/self?fields=profile,email', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-token': token,
      },
    });
    if (!response.ok) {
      const json = await response.json();
      throw new Error(json.error.message);
    }
    const json = await response.json();
    this.setState({ ...this.getState(), profile: json.result.profile, email: json.result.email });
  }
}

export default Profile;
