import {
  AdminChanged as AdminChangedEvent,
  BeaconUpgraded as BeaconUpgradedEvent,
  FundManagerCreated as FundManagerCreatedEvent,
  ImplementationUpdated as ImplementationUpdatedEvent,
  Initialized as InitializedEvent,
  OwnershipTransferStarted as OwnershipTransferStartedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ProtocolLibInfoUpdated as ProtocolLibInfoUpdatedEvent,
  SetNewFundManagerImplForProxy as SetNewFundManagerImplForProxyEvent,
  Upgraded as UpgradedEvent,
  Owner as OwnerEvent,
  Transaction as TransactionEvent,
  TransactionReciept as TransactionRecieptEvent,
} from "../generated/FactoryContract/FactoryContract";

import {
  CodeUpdated as CodeUpdatedEvent,
  FundsAdded as FundsAddedEvent,
  LiquidityAdded as LiquidityAddedEvent,
  LiquidityWithdrawn as LiquidityWithdrawnEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  VaultCreated as VaultCreatedEvent
} from "../generated/templates/ChildContract/ChildContract"

import {
  AdminChanged,
  BeaconUpgraded,
  CodeUpdated,
  FundManagerCreated,
  FundsAdded,
  ImplementationUpdated,
  Initialized,
  LiquidityAdded,
  LiquidityWithdrawn,
  Owner,
  OwnershipTransferStarted,
  OwnershipTransferred,
  ProtocolLibInfoUpdated,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  SetNewFundManagerImplForProxy,
  Transaction,
  TransactionReceipt,
  Upgraded,
  VaultCreated,
} from "../generated/schema";
import { ChildContract as ChildEvent } from "../generated/templates/ChildContract/ChildContract"; 

export function handleAdminChanged(event: AdminChangedEvent): void {
  let entity = new AdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.previousAdmin = event.params.previousAdmin;
  entity.newAdmin = event.params.newAdmin;
  entity.save();
}

export function handleBeaconUpgraded(event: BeaconUpgradedEvent): void {
  let entity = new BeaconUpgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.beacon = event.params.beacon;
  entity.save();
}

export function handleFundManagerCreated(event: FundManagerCreatedEvent): void {
  let entity = new FundManagerCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.fundManager = event.params.fundManager;
  entity.user = event.params.user;
  entity.label = event.params.label;
  entity.save();
}

export function handleImplementationUpdated(
  event: ImplementationUpdatedEvent
): void {
  let entity = new ImplementationUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.previousImpl = event.params.previousImpl;
  entity.newImpl = event.params.newImpl;
  entity.typeId = event.params.typeId;
  entity.save();
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.version = event.params.version;
  entity.save();
}

export function handleOwnershipTransferStarted(
  event: OwnershipTransferStartedEvent
): void {
  let entity = new OwnershipTransferStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;
  entity.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;
  entity.save();
}

export function handleProtocolLibInfoUpdated(
  event: ProtocolLibInfoUpdatedEvent
): void {
  let entity = new ProtocolLibInfoUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.typeId = event.params.typeId;
  entity.lib = event.params.lib;
  entity.save();
}

export function handleSetNewFundManagerImplForProxy(
  event: SetNewFundManagerImplForProxyEvent
): void {
  let entity = new SetNewFundManagerImplForProxy(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.proxy = event.params.proxy;
  entity.newImpl = event.params.newImpl;
  entity.typeId = event.params.typeId;
  entity.save();
}

export function handleUpgraded(event: UpgradedEvent): void {
  let entity = new Upgraded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.implementation = event.params.implementation;
  entity.save();
}

export function handleOwner(event: OwnerEvent): void {
  let entity = new Owner(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.name = event.params.name.toString();
  entity.fundsOwned = event.params.fundsOwned.toString();
  entity.save();
}

export function handleTransaction(event: TransactionEvent): void {
  let entity = new Transaction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  let transactionReceipt = new TransactionReceipt(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.transactionReceipt = transactionReceipt.id;
  entity.save();
}

export function handleTransactionReciept(event: TransactionRecieptEvent): void {
  let entity = new TransactionReceipt(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );

  let transaction = new Transaction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.transaction = transaction.id;
  entity.save();
}

export function handleCodeUpdated(event: CodeUpdatedEvent): void {
  let entity = new CodeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.uuid = event.params.uuid
  entity.codeAddress = event.params.codeAddress
  entity.save()
}

export function handleFundsAdded(event: FundsAddedEvent): void {
  let entity = new FundsAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._user = event.params._user
  entity._investmentAmount = event.params._investmentAmount
  entity._sharesReceived = event.params._sharesReceived
  entity.save()
}

export function handleLiquidityAdded(event: LiquidityAddedEvent): void {
  let entity = new LiquidityAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.externalPosition = event.params.externalPosition
  entity.nftId = event.params.nftId
  entity.liquidityAdded = event.params.liquidityAdded
  entity.save()
}

export function handleLiquidityWithdrawn(event: LiquidityWithdrawnEvent): void {
  let entity = new LiquidityWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.externalPosition = event.params.externalPosition
  entity.nftId = event.params.nftId
  entity.liquidityWithdrawn = event.params.liquidityWithdrawn
  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole
  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleVaultCreated(event: VaultCreatedEvent): void {
  let entity = new VaultCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._user = event.params._user
  entity._fundOwner = event.params._fundOwner
  entity._comptrollerProxy = event.params._comptrollerProxy
  entity._vaultProxy = event.params._vaultProxy
  entity.save()
}

