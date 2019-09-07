export class AppConfig {
    private baseURL = 'https://localhost:44371/';

    url(url: string) {
        return this.baseURL + url;
    }
}
