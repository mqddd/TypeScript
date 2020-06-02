class SpaceAge {
  private seconds: number;
  private ageOnEarth: number;

  constructor(seconds: number) {
    this.seconds = seconds;
    this.ageOnEarth = seconds / 31557600;
  }

  onEarth = (): number => {
    return this.ageOnEarth;
  }

  onMercury = (): number => {
    return this.ageOnEarth / 0.2408467;
  }

  onVenus = (): number => {
    return this.ageOnEarth / 0.61519726;
  }

  onMars = (): number => {
    return this.ageOnEarth / 1.8808158;
  }

  onJupiter = (): number => {
    return this.ageOnEarth / 11.862615;
  }

  onSaturn = (): number => {
    return this.ageOnEarth / 29.447498;
  }

  onUranus = (): number => {
    return this.ageOnEarth / 84.016846;
  }

  onNeptune = (): number => {
    return this.ageOnEarth / 164.79132;
  }
}
