import { SecretValue } from 'aws-cdk-lib';

export interface User {
  readonly username: string;
  readonly password: SecretValue;
}

export interface ILdapAuthorization {
  readonly hosts: string[];
  readonly roleBase : string;
  readonly roleName : string;
  readonly role : string;
  readonly roleSearchSubtree: string;
  readonly serviceAccountPassword: string;
  readonly userBase: string;
  readonly userRoleName: string;
  readonly userSearchMatching: string;
  readonly userSearchSubtree: string;

}