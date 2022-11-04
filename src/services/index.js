import rsRequest from './request';

export function getPowerScreenData() {

  return rsRequest.get({
    url: "/powerscreen"
  });
}