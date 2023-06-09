export class Content {
  private readonly content: string;

  public get value(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    if (!this.validateContentLength(content)) {
      throw new Error('Content must be between 5 and 240 characters');
    }

    this.content = content;
  }
}
