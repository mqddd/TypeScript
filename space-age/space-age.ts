class SpaceAge {
  private seconds: number;
  private ageOnEarth: number;

  constructor(seconds: number) {
    this.seconds = seconds;
    this.ageOnEarth = seconds / 31557600;
  }

  public onEarth(): number {
    return this.ageOnEarth;
  }

  public onMercury(): number {
    return this.ageOnEarth / 0.2408467;
  }

  public onVenus(): number {
    return this.ageOnEarth / 0.61519726;
  }

  public onMars(): number {
    return this.ageOnEarth / 1.8808158;
  }

  public onJupiter(): number {
    return this.ageOnEarth / 11.862615;
  }

  public onSaturn(): number {
    return this.ageOnEarth / 29.447498;
  }

  public onUranus(): number {
    return this.ageOnEarth / 84.016846;
  }

  public onNeptune(): number {
    return this.ageOnEarth / 164.79132;
  }
}
