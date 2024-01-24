// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $$$0 from "./loaders/blocks/revision.ts";
import * as $$$1 from "./loaders/blocks/published.ts";
import * as $$$2 from "./loaders/blocks/latest.ts";
import * as $$$3 from "./loaders/blocks/listRevisions.ts";
import * as $$$4 from "./loaders/state.ts";
import * as $$$5 from "./loaders/releases/get.ts";
import * as $$$6 from "./loaders/releases/blocks.ts";
import * as $$$7 from "./loaders/platforms/forSite.ts";
import * as $$$8 from "./loaders/assistants/code.ts";
import * as $$$9 from "./loaders/deploy.ts";
import * as $$$10 from "./loaders/pages/list.ts";
import * as $$$$0 from "./handlers/files.ts";
import * as $$$$$$$$$0 from "./actions/blocks/publish.ts";
import * as $$$$$$$$$1 from "./actions/blocks/restore.ts";
import * as $$$$$$$$$2 from "./actions/blocks/safeDelete.ts";
import * as $$$$$$$$$3 from "./actions/blocks/newRevision.ts";
import * as $$$$$$$$$4 from "./actions/blocks/delete.ts";
import * as $$$$$$$$$5 from "./actions/releases/fork.ts";
import * as $$$$$$$$$6 from "./actions/platforms/assign.ts";
import * as $$$$$$$$$7 from "./actions/code/vision.ts";
import * as $$$$$$$$$8 from "./actions/code/suggestions.ts";
import * as $$$$$$$$$9 from "./actions/sites/linkRepo.ts";
import * as $$$$$$$$$10 from "./actions/sites/newDomain.ts";
import * as $$$$$$$$$11 from "./actions/sites/create.ts";
import * as $$$$$$$$$12 from "./actions/sites/unlinkRepo.ts";
import * as $$$$$$$$$13 from "./actions/github/setStatus.ts";
import * as $$$$$$$$$14 from "./actions/github/webhooks/broker.ts";
import * as $$$$$$$$$15 from "./actions/pages/publish.ts";
import * as $$$$$$$$$16 from "./actions/pages/new.ts";
import * as $$$$$$$$$17 from "./actions/pages/delete.ts";
import * as $$$$$$$$$18 from "./actions/deployments/create.ts";

const manifest = {
  "loaders": {
    "deco-sites/admin/loaders/assistants/code.ts": $$$8,
    "deco-sites/admin/loaders/blocks/latest.ts": $$$2,
    "deco-sites/admin/loaders/blocks/listRevisions.ts": $$$3,
    "deco-sites/admin/loaders/blocks/published.ts": $$$1,
    "deco-sites/admin/loaders/blocks/revision.ts": $$$0,
    "deco-sites/admin/loaders/deploy.ts": $$$9,
    "deco-sites/admin/loaders/pages/list.ts": $$$10,
    "deco-sites/admin/loaders/platforms/forSite.ts": $$$7,
    "deco-sites/admin/loaders/releases/blocks.ts": $$$6,
    "deco-sites/admin/loaders/releases/get.ts": $$$5,
    "deco-sites/admin/loaders/state.ts": $$$4,
  },
  "handlers": {
    "deco-sites/admin/handlers/files.ts": $$$$0,
  },
  "actions": {
    "deco-sites/admin/actions/blocks/delete.ts": $$$$$$$$$4,
    "deco-sites/admin/actions/blocks/newRevision.ts": $$$$$$$$$3,
    "deco-sites/admin/actions/blocks/publish.ts": $$$$$$$$$0,
    "deco-sites/admin/actions/blocks/restore.ts": $$$$$$$$$1,
    "deco-sites/admin/actions/blocks/safeDelete.ts": $$$$$$$$$2,
    "deco-sites/admin/actions/code/suggestions.ts": $$$$$$$$$8,
    "deco-sites/admin/actions/code/vision.ts": $$$$$$$$$7,
    "deco-sites/admin/actions/deployments/create.ts": $$$$$$$$$18,
    "deco-sites/admin/actions/github/setStatus.ts": $$$$$$$$$13,
    "deco-sites/admin/actions/github/webhooks/broker.ts": $$$$$$$$$14,
    "deco-sites/admin/actions/pages/delete.ts": $$$$$$$$$17,
    "deco-sites/admin/actions/pages/new.ts": $$$$$$$$$16,
    "deco-sites/admin/actions/pages/publish.ts": $$$$$$$$$15,
    "deco-sites/admin/actions/platforms/assign.ts": $$$$$$$$$6,
    "deco-sites/admin/actions/releases/fork.ts": $$$$$$$$$5,
    "deco-sites/admin/actions/sites/create.ts": $$$$$$$$$11,
    "deco-sites/admin/actions/sites/linkRepo.ts": $$$$$$$$$9,
    "deco-sites/admin/actions/sites/newDomain.ts": $$$$$$$$$10,
    "deco-sites/admin/actions/sites/unlinkRepo.ts": $$$$$$$$$12,
  },
  "name": "deco-sites/admin",
  "baseUrl": import.meta.url,
};

export type Manifest = typeof manifest;

export default manifest;
