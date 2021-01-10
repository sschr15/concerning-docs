var pages = [{"name":"interface BlockAttackInteractionAware","description":"net.fabricmc.fabric.api.block.BlockAttackInteractionAware","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.block/-block-attack-interaction-aware/index.html","searchKeys":["BlockAttackInteractionAware","interface BlockAttackInteractionAware"]},{"name":" abstract fun onAttackInteraction(state: BlockState, world: World, pos: BlockPos, player: PlayerEntity, hand: Hand, direction: Direction): Boolean","description":"net.fabricmc.fabric.api.block.BlockAttackInteractionAware.onAttackInteraction","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.block/-block-attack-interaction-aware/on-attack-interaction.html","searchKeys":["onAttackInteraction"," abstract fun onAttackInteraction(state: BlockState, world: World, pos: BlockPos, player: PlayerEntity, hand: Hand, direction: Direction): Boolean"]},{"name":"interface BlockPickInteractionAware","description":"net.fabricmc.fabric.api.block.BlockPickInteractionAware","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.block/-block-pick-interaction-aware/index.html","searchKeys":["BlockPickInteractionAware","interface BlockPickInteractionAware"]},{"name":" abstract fun getPickedStack(state: BlockState, view: BlockView, pos: BlockPos, player: PlayerEntity, result: HitResult): ItemStack","description":"net.fabricmc.fabric.api.block.BlockPickInteractionAware.getPickedStack","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.block/-block-pick-interaction-aware/get-picked-stack.html","searchKeys":["getPickedStack"," abstract fun getPickedStack(state: BlockState, view: BlockView, pos: BlockPos, player: PlayerEntity, result: HitResult): ItemStack"]},{"name":" abstract fun getPickedStack(player: PlayerEntity, result: HitResult): ItemStack","description":"net.fabricmc.fabric.api.entity.EntityPickInteractionAware.getPickedStack","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.entity/-entity-pick-interaction-aware/get-picked-stack.html","searchKeys":["getPickedStack"," abstract fun getPickedStack(player: PlayerEntity, result: HitResult): ItemStack"]},{"name":"interface EntityPickInteractionAware","description":"net.fabricmc.fabric.api.entity.EntityPickInteractionAware","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.entity/-entity-pick-interaction-aware/index.html","searchKeys":["EntityPickInteractionAware","interface EntityPickInteractionAware"]},{"name":"interface ClientPickBlockApplyCallback","description":"net.fabricmc.fabric.api.event.client.player.ClientPickBlockApplyCallback","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.client.player/-client-pick-block-apply-callback/index.html","searchKeys":["ClientPickBlockApplyCallback","interface ClientPickBlockApplyCallback"]},{"name":" val EVENT: Event<ClientPickBlockApplyCallback>","description":"net.fabricmc.fabric.api.event.client.player.ClientPickBlockApplyCallback.EVENT","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.client.player/-client-pick-block-apply-callback/-e-v-e-n-t.html","searchKeys":["EVENT"," val EVENT: Event<ClientPickBlockApplyCallback>"]},{"name":" val EVENT: Event<ClientPickBlockCallback>","description":"net.fabricmc.fabric.api.event.client.player.ClientPickBlockCallback.EVENT","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.client.player/-client-pick-block-callback/-e-v-e-n-t.html","searchKeys":["EVENT"," val EVENT: Event<ClientPickBlockCallback>"]},{"name":" val EVENT: Event<ClientPickBlockGatherCallback>","description":"net.fabricmc.fabric.api.event.client.player.ClientPickBlockGatherCallback.EVENT","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.client.player/-client-pick-block-gather-callback/-e-v-e-n-t.html","searchKeys":["EVENT"," val EVENT: Event<ClientPickBlockGatherCallback>"]},{"name":" val EVENT: Event<AttackBlockCallback>","description":"net.fabricmc.fabric.api.event.player.AttackBlockCallback.EVENT","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.player/-attack-block-callback/-e-v-e-n-t.html","searchKeys":["EVENT"," val EVENT: Event<AttackBlockCallback>"]},{"name":" val EVENT: Event<AttackEntityCallback>","description":"net.fabricmc.fabric.api.event.player.AttackEntityCallback.EVENT","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.player/-attack-entity-callback/-e-v-e-n-t.html","searchKeys":["EVENT"," val EVENT: Event<AttackEntityCallback>"]},{"name":" val EVENT: Event<UseBlockCallback>","description":"net.fabricmc.fabric.api.event.player.UseBlockCallback.EVENT","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.player/-use-block-callback/-e-v-e-n-t.html","searchKeys":["EVENT"," val EVENT: Event<UseBlockCallback>"]},{"name":" val EVENT: Event<UseEntityCallback>","description":"net.fabricmc.fabric.api.event.player.UseEntityCallback.EVENT","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.player/-use-entity-callback/-e-v-e-n-t.html","searchKeys":["EVENT"," val EVENT: Event<UseEntityCallback>"]},{"name":" val EVENT: Event<UseItemCallback>","description":"net.fabricmc.fabric.api.event.player.UseItemCallback.EVENT","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.player/-use-item-callback/-e-v-e-n-t.html","searchKeys":["EVENT"," val EVENT: Event<UseItemCallback>"]},{"name":" abstract fun pick(player: PlayerEntity, result: HitResult, stack: ItemStack): ItemStack","description":"net.fabricmc.fabric.api.event.client.player.ClientPickBlockApplyCallback.pick","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.client.player/-client-pick-block-apply-callback/pick.html","searchKeys":["pick"," abstract fun pick(player: PlayerEntity, result: HitResult, stack: ItemStack): ItemStack"]},{"name":" abstract fun pick(player: PlayerEntity, result: HitResult, container: ClientPickBlockCallback.Container): Boolean","description":"net.fabricmc.fabric.api.event.client.player.ClientPickBlockCallback.pick","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.client.player/-client-pick-block-callback/pick.html","searchKeys":["pick"," abstract fun pick(player: PlayerEntity, result: HitResult, container: ClientPickBlockCallback.Container): Boolean"]},{"name":" abstract fun pick(player: PlayerEntity, result: HitResult): ItemStack","description":"net.fabricmc.fabric.api.event.client.player.ClientPickBlockGatherCallback.pick","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.client.player/-client-pick-block-gather-callback/pick.html","searchKeys":["pick"," abstract fun pick(player: PlayerEntity, result: HitResult): ItemStack"]},{"name":"interface ClientPickBlockCallback","description":"net.fabricmc.fabric.api.event.client.player.ClientPickBlockCallback","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.client.player/-client-pick-block-callback/index.html","searchKeys":["ClientPickBlockCallback","interface ClientPickBlockCallback"]},{"name":" class Container","description":"net.fabricmc.fabric.api.event.client.player.ClientPickBlockCallback.Container","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.client.player/-client-pick-block-callback/-container/index.html","searchKeys":["Container"," class Container"]},{"name":"open fun Container(stack: ItemStack)","description":"net.fabricmc.fabric.api.event.client.player.ClientPickBlockCallback.Container.Container","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.client.player/-client-pick-block-callback/-container/-container.html","searchKeys":["Container","open fun Container(stack: ItemStack)"]},{"name":"private open var stack: ItemStack","description":"net.fabricmc.fabric.api.event.client.player.ClientPickBlockCallback.Container.stack","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.client.player/-client-pick-block-callback/-container/stack.html","searchKeys":["stack","private open var stack: ItemStack"]},{"name":"interface ClientPickBlockGatherCallback","description":"net.fabricmc.fabric.api.event.client.player.ClientPickBlockGatherCallback","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.client.player/-client-pick-block-gather-callback/index.html","searchKeys":["ClientPickBlockGatherCallback","interface ClientPickBlockGatherCallback"]},{"name":"interface AttackBlockCallback","description":"net.fabricmc.fabric.api.event.player.AttackBlockCallback","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.player/-attack-block-callback/index.html","searchKeys":["AttackBlockCallback","interface AttackBlockCallback"]},{"name":" abstract fun interact(player: PlayerEntity, world: World, hand: Hand, pos: BlockPos, direction: Direction): ActionResult","description":"net.fabricmc.fabric.api.event.player.AttackBlockCallback.interact","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.player/-attack-block-callback/interact.html","searchKeys":["interact"," abstract fun interact(player: PlayerEntity, world: World, hand: Hand, pos: BlockPos, direction: Direction): ActionResult"]},{"name":" abstract fun interact(player: PlayerEntity, world: World, hand: Hand, entity: Entity, hitResult: EntityHitResult): ActionResult","description":"net.fabricmc.fabric.api.event.player.AttackEntityCallback.interact","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.player/-attack-entity-callback/interact.html","searchKeys":["interact"," abstract fun interact(player: PlayerEntity, world: World, hand: Hand, entity: Entity, hitResult: EntityHitResult): ActionResult"]},{"name":" abstract fun interact(player: PlayerEntity, world: World, hand: Hand, hitResult: BlockHitResult): ActionResult","description":"net.fabricmc.fabric.api.event.player.UseBlockCallback.interact","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.player/-use-block-callback/interact.html","searchKeys":["interact"," abstract fun interact(player: PlayerEntity, world: World, hand: Hand, hitResult: BlockHitResult): ActionResult"]},{"name":" abstract fun interact(player: PlayerEntity, world: World, hand: Hand, entity: Entity, hitResult: EntityHitResult): ActionResult","description":"net.fabricmc.fabric.api.event.player.UseEntityCallback.interact","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.player/-use-entity-callback/interact.html","searchKeys":["interact"," abstract fun interact(player: PlayerEntity, world: World, hand: Hand, entity: Entity, hitResult: EntityHitResult): ActionResult"]},{"name":" abstract fun interact(player: PlayerEntity, world: World, hand: Hand): TypedActionResult<ItemStack>","description":"net.fabricmc.fabric.api.event.player.UseItemCallback.interact","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.player/-use-item-callback/interact.html","searchKeys":["interact"," abstract fun interact(player: PlayerEntity, world: World, hand: Hand): TypedActionResult<ItemStack>"]},{"name":"interface AttackEntityCallback","description":"net.fabricmc.fabric.api.event.player.AttackEntityCallback","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.player/-attack-entity-callback/index.html","searchKeys":["AttackEntityCallback","interface AttackEntityCallback"]},{"name":"class PlayerBlockBreakEvents","description":"net.fabricmc.fabric.api.event.player.PlayerBlockBreakEvents","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.player/-player-block-break-events/index.html","searchKeys":["PlayerBlockBreakEvents","class PlayerBlockBreakEvents"]},{"name":"val AFTER: Event<PlayerBlockBreakEvents.After>","description":"net.fabricmc.fabric.api.event.player.PlayerBlockBreakEvents.AFTER","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.player/-player-block-break-events/-a-f-t-e-r.html","searchKeys":["AFTER","val AFTER: Event<PlayerBlockBreakEvents.After>"]},{"name":"interface After","description":"net.fabricmc.fabric.api.event.player.PlayerBlockBreakEvents.After","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.player/-player-block-break-events/-after/index.html","searchKeys":["After","interface After"]},{"name":" abstract fun afterBlockBreak(world: World, player: PlayerEntity, pos: BlockPos, state: BlockState, blockEntity: BlockEntity)","description":"net.fabricmc.fabric.api.event.player.PlayerBlockBreakEvents.After.afterBlockBreak","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.player/-player-block-break-events/-after/after-block-break.html","searchKeys":["afterBlockBreak"," abstract fun afterBlockBreak(world: World, player: PlayerEntity, pos: BlockPos, state: BlockState, blockEntity: BlockEntity)"]},{"name":"val BEFORE: Event<PlayerBlockBreakEvents.Before>","description":"net.fabricmc.fabric.api.event.player.PlayerBlockBreakEvents.BEFORE","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.player/-player-block-break-events/-b-e-f-o-r-e.html","searchKeys":["BEFORE","val BEFORE: Event<PlayerBlockBreakEvents.Before>"]},{"name":"interface Before","description":"net.fabricmc.fabric.api.event.player.PlayerBlockBreakEvents.Before","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.player/-player-block-break-events/-before/index.html","searchKeys":["Before","interface Before"]},{"name":" abstract fun beforeBlockBreak(world: World, player: PlayerEntity, pos: BlockPos, state: BlockState, blockEntity: BlockEntity): Boolean","description":"net.fabricmc.fabric.api.event.player.PlayerBlockBreakEvents.Before.beforeBlockBreak","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.player/-player-block-break-events/-before/before-block-break.html","searchKeys":["beforeBlockBreak"," abstract fun beforeBlockBreak(world: World, player: PlayerEntity, pos: BlockPos, state: BlockState, blockEntity: BlockEntity): Boolean"]},{"name":"val CANCELED: Event<PlayerBlockBreakEvents.Canceled>","description":"net.fabricmc.fabric.api.event.player.PlayerBlockBreakEvents.CANCELED","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.player/-player-block-break-events/-c-a-n-c-e-l-e-d.html","searchKeys":["CANCELED","val CANCELED: Event<PlayerBlockBreakEvents.Canceled>"]},{"name":"interface Canceled","description":"net.fabricmc.fabric.api.event.player.PlayerBlockBreakEvents.Canceled","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.player/-player-block-break-events/-canceled/index.html","searchKeys":["Canceled","interface Canceled"]},{"name":" abstract fun onBlockBreakCanceled(world: World, player: PlayerEntity, pos: BlockPos, state: BlockState, blockEntity: BlockEntity)","description":"net.fabricmc.fabric.api.event.player.PlayerBlockBreakEvents.Canceled.onBlockBreakCanceled","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.player/-player-block-break-events/-canceled/on-block-break-canceled.html","searchKeys":["onBlockBreakCanceled"," abstract fun onBlockBreakCanceled(world: World, player: PlayerEntity, pos: BlockPos, state: BlockState, blockEntity: BlockEntity)"]},{"name":"interface UseBlockCallback","description":"net.fabricmc.fabric.api.event.player.UseBlockCallback","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.player/-use-block-callback/index.html","searchKeys":["UseBlockCallback","interface UseBlockCallback"]},{"name":"interface UseEntityCallback","description":"net.fabricmc.fabric.api.event.player.UseEntityCallback","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.player/-use-entity-callback/index.html","searchKeys":["UseEntityCallback","interface UseEntityCallback"]},{"name":"interface UseItemCallback","description":"net.fabricmc.fabric.api.event.player.UseItemCallback","location":"fabric-events-interaction-v0/net.fabricmc.fabric.api.event.player/-use-item-callback/index.html","searchKeys":["UseItemCallback","interface UseItemCallback"]},{"name":"open class InteractionEventsRouter : ModInitializer","description":"net.fabricmc.fabric.impl.event.interaction.InteractionEventsRouter","location":"fabric-events-interaction-v0/net.fabricmc.fabric.impl.event.interaction/-interaction-events-router/index.html","searchKeys":["InteractionEventsRouter","open class InteractionEventsRouter : ModInitializer"]},{"name":"open fun onInitialize()","description":"net.fabricmc.fabric.impl.event.interaction.InteractionEventsRouter.onInitialize","location":"fabric-events-interaction-v0/net.fabricmc.fabric.impl.event.interaction/-interaction-events-router/on-initialize.html","searchKeys":["onInitialize","open fun onInitialize()"]},{"name":"open class InteractionEventsRouterClient : ClientModInitializer","description":"net.fabricmc.fabric.impl.event.interaction.InteractionEventsRouterClient","location":"fabric-events-interaction-v0/net.fabricmc.fabric.impl.event.interaction/-interaction-events-router-client/index.html","searchKeys":["InteractionEventsRouterClient","open class InteractionEventsRouterClient : ClientModInitializer"]},{"name":"open fun onInitializeClient()","description":"net.fabricmc.fabric.impl.event.interaction.InteractionEventsRouterClient.onInitializeClient","location":"fabric-events-interaction-v0/net.fabricmc.fabric.impl.event.interaction/-interaction-events-router-client/on-initialize-client.html","searchKeys":["onInitializeClient","open fun onInitializeClient()"]},{"name":"open class MixinClientPlayerInteractionManager","description":"net.fabricmc.fabric.mixin.event.interaction.MixinClientPlayerInteractionManager","location":"fabric-events-interaction-v0/net.fabricmc.fabric.mixin.event.interaction/-mixin-client-player-interaction-manager/index.html","searchKeys":["MixinClientPlayerInteractionManager","open class MixinClientPlayerInteractionManager"]},{"name":"open fun attackBlock(pos: BlockPos, direction: Direction, info: CallbackInfoReturnable<Boolean>)","description":"net.fabricmc.fabric.mixin.event.interaction.MixinClientPlayerInteractionManager.attackBlock","location":"fabric-events-interaction-v0/net.fabricmc.fabric.mixin.event.interaction/-mixin-client-player-interaction-manager/attack-block.html","searchKeys":["attackBlock","open fun attackBlock(pos: BlockPos, direction: Direction, info: CallbackInfoReturnable<Boolean>)"]},{"name":"open fun attackEntity(player: PlayerEntity, entity: Entity, info: CallbackInfo)","description":"net.fabricmc.fabric.mixin.event.interaction.MixinClientPlayerInteractionManager.attackEntity","location":"fabric-events-interaction-v0/net.fabricmc.fabric.mixin.event.interaction/-mixin-client-player-interaction-manager/attack-entity.html","searchKeys":["attackEntity","open fun attackEntity(player: PlayerEntity, entity: Entity, info: CallbackInfo)"]},{"name":"open fun interactBlock(player: ClientPlayerEntity, world: ClientWorld, hand: Hand, blockHitResult: BlockHitResult, info: CallbackInfoReturnable<ActionResult>)","description":"net.fabricmc.fabric.mixin.event.interaction.MixinClientPlayerInteractionManager.interactBlock","location":"fabric-events-interaction-v0/net.fabricmc.fabric.mixin.event.interaction/-mixin-client-player-interaction-manager/interact-block.html","searchKeys":["interactBlock","open fun interactBlock(player: ClientPlayerEntity, world: ClientWorld, hand: Hand, blockHitResult: BlockHitResult, info: CallbackInfoReturnable<ActionResult>)"]},{"name":"open fun interactBlock(player: ServerPlayerEntity, world: World, stack: ItemStack, hand: Hand, blockHitResult: BlockHitResult, info: CallbackInfoReturnable<ActionResult>)","description":"net.fabricmc.fabric.mixin.event.interaction.MixinServerPlayerInteractionManager.interactBlock","location":"fabric-events-interaction-v0/net.fabricmc.fabric.mixin.event.interaction/-mixin-server-player-interaction-manager/interact-block.html","searchKeys":["interactBlock","open fun interactBlock(player: ServerPlayerEntity, world: World, stack: ItemStack, hand: Hand, blockHitResult: BlockHitResult, info: CallbackInfoReturnable<ActionResult>)"]},{"name":"open fun interactEntityAtLocation(player: PlayerEntity, entity: Entity, hitResult: EntityHitResult, hand: Hand, info: CallbackInfoReturnable<ActionResult>)","description":"net.fabricmc.fabric.mixin.event.interaction.MixinClientPlayerInteractionManager.interactEntityAtLocation","location":"fabric-events-interaction-v0/net.fabricmc.fabric.mixin.event.interaction/-mixin-client-player-interaction-manager/interact-entity-at-location.html","searchKeys":["interactEntityAtLocation","open fun interactEntityAtLocation(player: PlayerEntity, entity: Entity, hitResult: EntityHitResult, hand: Hand, info: CallbackInfoReturnable<ActionResult>)"]},{"name":"open fun interactItem(player: PlayerEntity, world: World, hand: Hand, info: CallbackInfoReturnable<ActionResult>)","description":"net.fabricmc.fabric.mixin.event.interaction.MixinClientPlayerInteractionManager.interactItem","location":"fabric-events-interaction-v0/net.fabricmc.fabric.mixin.event.interaction/-mixin-client-player-interaction-manager/interact-item.html","searchKeys":["interactItem","open fun interactItem(player: PlayerEntity, world: World, hand: Hand, info: CallbackInfoReturnable<ActionResult>)"]},{"name":"open fun interactItem(player: ServerPlayerEntity, world: World, stack: ItemStack, hand: Hand, info: CallbackInfoReturnable<ActionResult>)","description":"net.fabricmc.fabric.mixin.event.interaction.MixinServerPlayerInteractionManager.interactItem","location":"fabric-events-interaction-v0/net.fabricmc.fabric.mixin.event.interaction/-mixin-server-player-interaction-manager/interact-item.html","searchKeys":["interactItem","open fun interactItem(player: ServerPlayerEntity, world: World, stack: ItemStack, hand: Hand, info: CallbackInfoReturnable<ActionResult>)"]},{"name":"open fun method_2902(pos: BlockPos, direction: Direction, info: CallbackInfoReturnable<Boolean>)","description":"net.fabricmc.fabric.mixin.event.interaction.MixinClientPlayerInteractionManager.method_2902","location":"fabric-events-interaction-v0/net.fabricmc.fabric.mixin.event.interaction/-mixin-client-player-interaction-manager/method_2902.html","searchKeys":["method_2902","open fun method_2902(pos: BlockPos, direction: Direction, info: CallbackInfoReturnable<Boolean>)"]},{"name":"abstract class MixinMinecraftClient","description":"net.fabricmc.fabric.mixin.event.interaction.MixinMinecraftClient","location":"fabric-events-interaction-v0/net.fabricmc.fabric.mixin.event.interaction/-mixin-minecraft-client/index.html","searchKeys":["MixinMinecraftClient","abstract class MixinMinecraftClient"]},{"name":"abstract fun addBlockEntityNbt(itemStack_1: ItemStack, blockEntity_1: BlockEntity): ItemStack","description":"net.fabricmc.fabric.mixin.event.interaction.MixinMinecraftClient.addBlockEntityNbt","location":"fabric-events-interaction-v0/net.fabricmc.fabric.mixin.event.interaction/-mixin-minecraft-client/add-block-entity-nbt.html","searchKeys":["addBlockEntityNbt","abstract fun addBlockEntityNbt(itemStack_1: ItemStack, blockEntity_1: BlockEntity): ItemStack"]},{"name":"open fun cancelItemPick(info: CallbackInfo)","description":"net.fabricmc.fabric.mixin.event.interaction.MixinMinecraftClient.cancelItemPick","location":"fabric-events-interaction-v0/net.fabricmc.fabric.mixin.event.interaction/-mixin-minecraft-client/cancel-item-pick.html","searchKeys":["cancelItemPick","open fun cancelItemPick(info: CallbackInfo)"]},{"name":"abstract fun doItemPick()","description":"net.fabricmc.fabric.mixin.event.interaction.MixinMinecraftClient.doItemPick","location":"fabric-events-interaction-v0/net.fabricmc.fabric.mixin.event.interaction/-mixin-minecraft-client/do-item-pick.html","searchKeys":["doItemPick","abstract fun doItemPick()"]},{"name":"open fun modifyItemPick(stack: ItemStack): ItemStack","description":"net.fabricmc.fabric.mixin.event.interaction.MixinMinecraftClient.modifyItemPick","location":"fabric-events-interaction-v0/net.fabricmc.fabric.mixin.event.interaction/-mixin-minecraft-client/modify-item-pick.html","searchKeys":["modifyItemPick","open fun modifyItemPick(stack: ItemStack): ItemStack"]},{"name":"open class MixinServerPlayNetworkHandler","description":"net.fabricmc.fabric.mixin.event.interaction.MixinServerPlayNetworkHandler","location":"fabric-events-interaction-v0/net.fabricmc.fabric.mixin.event.interaction/-mixin-server-play-network-handler/index.html","searchKeys":["MixinServerPlayNetworkHandler","open class MixinServerPlayNetworkHandler"]},{"name":"open fun onPlayerInteractEntity(packet: PlayerInteractEntityC2SPacket, info: CallbackInfo)","description":"net.fabricmc.fabric.mixin.event.interaction.MixinServerPlayNetworkHandler.onPlayerInteractEntity","location":"fabric-events-interaction-v0/net.fabricmc.fabric.mixin.event.interaction/-mixin-server-play-network-handler/on-player-interact-entity.html","searchKeys":["onPlayerInteractEntity","open fun onPlayerInteractEntity(packet: PlayerInteractEntityC2SPacket, info: CallbackInfo)"]},{"name":"open fun onPlayerInteractEntity(target: Entity, info: CallbackInfo)","description":"net.fabricmc.fabric.mixin.event.interaction.MixinServerPlayerEntity.onPlayerInteractEntity","location":"fabric-events-interaction-v0/net.fabricmc.fabric.mixin.event.interaction/-mixin-server-player-entity/on-player-interact-entity.html","searchKeys":["onPlayerInteractEntity","open fun onPlayerInteractEntity(target: Entity, info: CallbackInfo)"]},{"name":"open val player: ServerPlayerEntity","description":"net.fabricmc.fabric.mixin.event.interaction.MixinServerPlayNetworkHandler.player","location":"fabric-events-interaction-v0/net.fabricmc.fabric.mixin.event.interaction/-mixin-server-play-network-handler/player.html","searchKeys":["player","open val player: ServerPlayerEntity"]},{"name":"open val player: ServerPlayerEntity","description":"net.fabricmc.fabric.mixin.event.interaction.MixinServerPlayerInteractionManager.player","location":"fabric-events-interaction-v0/net.fabricmc.fabric.mixin.event.interaction/-mixin-server-player-interaction-manager/player.html","searchKeys":["player","open val player: ServerPlayerEntity"]},{"name":"open class MixinServerPlayerEntity","description":"net.fabricmc.fabric.mixin.event.interaction.MixinServerPlayerEntity","location":"fabric-events-interaction-v0/net.fabricmc.fabric.mixin.event.interaction/-mixin-server-player-entity/index.html","searchKeys":["MixinServerPlayerEntity","open class MixinServerPlayerEntity"]},{"name":"open class MixinServerPlayerInteractionManager","description":"net.fabricmc.fabric.mixin.event.interaction.MixinServerPlayerInteractionManager","location":"fabric-events-interaction-v0/net.fabricmc.fabric.mixin.event.interaction/-mixin-server-player-interaction-manager/index.html","searchKeys":["MixinServerPlayerInteractionManager","open class MixinServerPlayerInteractionManager"]},{"name":"open fun startBlockBreak(pos: BlockPos, playerAction: PlayerActionC2SPacket.Action, direction: Direction, i: Int, info: CallbackInfo)","description":"net.fabricmc.fabric.mixin.event.interaction.MixinServerPlayerInteractionManager.startBlockBreak","location":"fabric-events-interaction-v0/net.fabricmc.fabric.mixin.event.interaction/-mixin-server-player-interaction-manager/start-block-break.html","searchKeys":["startBlockBreak","open fun startBlockBreak(pos: BlockPos, playerAction: PlayerActionC2SPacket.Action, direction: Direction, i: Int, info: CallbackInfo)"]},{"name":"open val world: ServerWorld","description":"net.fabricmc.fabric.mixin.event.interaction.MixinServerPlayerInteractionManager.world","location":"fabric-events-interaction-v0/net.fabricmc.fabric.mixin.event.interaction/-mixin-server-player-interaction-manager/world.html","searchKeys":["world","open val world: ServerWorld"]}]