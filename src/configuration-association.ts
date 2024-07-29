/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { Resource } from 'aws-cdk-lib';
import { CfnConfigurationAssociation } from 'aws-cdk-lib/aws-amazonmq';
import { Construct } from 'constructs';
import { IBrokerDeployment } from './broker-deployment';
import { IBrokerConfiguration } from './configuration';

export interface ConfigurationAssociationProps {
  readonly broker: IBrokerDeployment;
  readonly configuration: IBrokerConfiguration;
}

export class ConfigurationAssociation extends Resource {
  constructor(scope: Construct, id: string, props: ConfigurationAssociationProps) {
    super(scope, id);

    new CfnConfigurationAssociation(this, 'Resource', {
      broker: props.broker.id,
      configuration: {
        id: props.configuration.id,
        revision: props.configuration.revision,
      },
    });
  }
}