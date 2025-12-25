import { AppConfig, loadConfig } from './config';

export class ConfigService {
  private static config: AppConfig;

  static load() {
    if (!this.config) {
      this.config = loadConfig();
    }
    return this.config;
  }

  static get(): AppConfig {
    if (!this.config) {
      throw new Error('Config not loaded. Call ConfigService.load() first.');
    }
    return this.config;
  }
}
