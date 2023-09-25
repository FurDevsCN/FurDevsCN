export interface MemberItem extends Object {
  readonly login: string;
  readonly html_url: string;
  readonly avatar_url: string;
  readonly bio: string | null;
  readonly name: string;
}
