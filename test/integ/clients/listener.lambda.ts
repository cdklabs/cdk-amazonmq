/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
export const handler = async (event: unknown) => {
  console.log(JSON.stringify(event, null, 2));
};