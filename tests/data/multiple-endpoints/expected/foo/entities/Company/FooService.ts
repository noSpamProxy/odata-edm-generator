/**
 * This is a generated file. Please don't change this manually.
 */

import {
  Class,
  odataTypeKey,
  ODataRawType,
  createModel,
} from '@netatwork/odata-edm-generator';
import {
  Endpoints,
} from '../../Endpoints.js';

export class Base {

  public static create<TBase extends Base = Base>(this: Class<TBase>, raw: TBase): TBase {
    return new this(
      raw.BaseProp12,
      raw.BaseProp13,
      raw.BaseProp11,
      raw.BaseProp14,
    );
  }

  public constructor(
    public BaseProp12: number,
    public BaseProp13: string,
    public BaseProp11?: string | null,
    public BaseProp14?: number | null,
  ) { }
}

export class Bazz {
  public static readonly ODataEndpoint = Endpoints.Fizz;

  public static create<TBazz extends Bazz = Bazz>(this: Class<TBazz>, raw: TBazz): TBazz {
    return new this(
      raw.Id,
      raw.BazzProp2,
      createModel(Bar, raw.Bar),
      raw.BarId,
      raw.BazzProp1,
      raw.Cp,
      raw.Foos,
    );
  }

  public constructor(
    public Id: number,
    public BazzProp2: number,
    public Bar?: Bar | null,
    public BarId?: number | null,
    public BazzProp1?: string | null,
    public Cp?: Interface2 | null,
    public Foos?: Foo[] | null,
  ) { }
}

export class Foo {
  public static readonly ODataEndpoint = Endpoints.Foos;

  public static create<TFoo extends Foo = Foo>(this: Class<TFoo>, raw: TFoo): TFoo {
    return new this(
      raw.Id,
      raw.ByteProp,
      raw.DateStrProp,
      raw.StrProp,
    );
  }

  public constructor(
    public Id: number,
    public ByteProp: number,
    public DateStrProp: string,
    public StrProp?: string | null,
  ) { }
}

export class Bar {

  public static create<TBar extends Bar = Bar>(this: Class<TBar>, raw: TBar): TBar {
    return new this(
      raw.Id,
      raw.Prop12,
      raw.Prop13,
      raw.Prop11,
      raw.Prop14,
    );
  }

  public constructor(
    public Id: number,
    public Prop12: string,
    public Prop13: number,
    public Prop11?: string | null,
    public Prop14?: number | null,
  ) { }
}

// @ts-ignore needed to avoid this issue: https://github.com/microsoft/TypeScript/issues/4628
export class ChildOne extends Base {
  public static readonly ODataEndpoint = Endpoints.Children;

  public static create<TChildOne extends ChildOne = ChildOne>(this: Class<TChildOne>, raw: TChildOne): TChildOne {
    return new this(
      raw.ChildId,
      raw.BaseProp12,
      raw.BaseProp13,
      raw.ChildProp12,
      raw.ChildProp13,
      raw.BaseProp11,
      raw.BaseProp14,
      raw.ChildProp11,
      createModel(StandardCondition, raw.Condition),
    );
  }

  public constructor(
    public ChildId: number,
    public BaseProp12: number,
    public BaseProp13: string,
    public ChildProp12: number,
    public ChildProp13: string,
    public BaseProp11?: string | null,
    public BaseProp14?: number | null,
    public ChildProp11?: number | null,
    public Condition?: StandardCondition | null,
  ) {
    super(
      BaseProp12,
      BaseProp13,
      BaseProp11,
      BaseProp14,
    );
  }
}

// @ts-ignore needed to avoid this issue: https://github.com/microsoft/TypeScript/issues/4628
export class ChildTwo extends Base {

  public static create<TChildTwo extends ChildTwo = ChildTwo>(this: Class<TChildTwo>, raw: TChildTwo): TChildTwo {
    return new this(
      raw.Id,
      raw.BaseProp12,
      raw.BaseProp13,
      raw.ChildProp12,
      raw.ChildProp13,
      raw.BaseProp11,
      raw.BaseProp14,
      raw.ChildProp11,
    );
  }

  public constructor(
    public Id: number,
    public BaseProp12: number,
    public BaseProp13: string,
    public ChildProp12: number,
    public ChildProp13: string,
    public BaseProp11?: string | null,
    public BaseProp14?: number | null,
    public ChildProp11?: number | null,
  ) {
    super(
      BaseProp12,
      BaseProp13,
      BaseProp11,
      BaseProp14,
    );
  }
}

// @ts-ignore needed to avoid this issue: https://github.com/microsoft/TypeScript/issues/4628
export class GrandChild extends ChildOne {

  public static create<TGrandChild extends GrandChild = GrandChild>(this: Class<TGrandChild>, raw: TGrandChild): TGrandChild {
    return new this(
      raw.ChildId,
      raw.Id,
      raw.BaseProp12,
      raw.BaseProp13,
      raw.ChildProp12,
      raw.ChildProp13,
      raw.GrandChildProp12,
      raw.GrandChildProp13,
      raw.BaseProp11,
      raw.BaseProp14,
      raw.ChildProp11,
      createModel(StandardCondition, raw.Condition),
      raw.GrandChildProp11,
    );
  }

  public constructor(
    public ChildId: number,
    public Id: number,
    public BaseProp12: number,
    public BaseProp13: string,
    public ChildProp12: number,
    public ChildProp13: string,
    public GrandChildProp12: number,
    public GrandChildProp13: string,
    public BaseProp11?: string | null,
    public BaseProp14?: number | null,
    public ChildProp11?: number | null,
    public Condition?: StandardCondition | null,
    public GrandChildProp11?: number | null,
  ) {
    super(
      ChildId,
      BaseProp12,
      BaseProp13,
      ChildProp12,
      ChildProp13,
      BaseProp11,
      BaseProp14,
      ChildProp11,
      Condition,
    );
  }
}

export enum $$BaseConfigurationTypes {
  BarConfiguration = 'BarConfiguration',
  FooConfiguration = 'FooConfiguration',
}

export interface BaseConfiguration {
  readonly $$type?: $$BaseConfigurationTypes;
}

export class BaseConfiguration {

  protected static get derivedTypes(): typeof BaseConfiguration[] {
    return [
      BarConfiguration,
      FooConfiguration,
    ] as unknown as typeof BaseConfiguration[];
  }

  public static create<TBaseConfiguration extends BaseConfiguration = BaseConfiguration>(raw: TBaseConfiguration): TBaseConfiguration {
    const edmType = (raw as ODataRawType<TBaseConfiguration>)[odataTypeKey];
    const ctor = this.derivedTypes.find((f) => f.canHandle(edmType));
    if (!ctor) {
      return raw;
    }
    return ctor.create(raw);
  }

  protected static canHandle(_odataType: string): boolean {
    return false;
  }

  public constructor(
    public BC1P1: number,
    public BC1P2?: string | null,
  ) { }
}

export enum $$DummyTypeTypes {
  B1BarCondition = 'B1BarCondition',
  B1FizzCondition = 'B1FizzCondition',
  B1FooCondition = 'B1FooCondition',
  BranchTwoCondition = 'BranchTwoCondition',
}

export interface DummyType {
  readonly $$type?: $$DummyTypeTypes;
}

export abstract class DummyType {

  protected static get derivedTypes(): typeof DummyType[] {
    return [
      B1BarCondition,
      B1FizzCondition,
      B1FooCondition,
      BranchTwoCondition,
    ] as unknown as typeof DummyType[];
  }

  public static create<TDummyType extends DummyType = DummyType>(raw: TDummyType): TDummyType {
    const edmType = (raw as ODataRawType<TDummyType>)[odataTypeKey];
    const ctor = this.derivedTypes.find((f) => f.canHandle(edmType));
    if (!ctor) {
      return raw;
    }
    return ctor.create(raw);
  }

  protected static canHandle(_odataType: string): boolean {
    return false;
  }

  protected constructor(
    public Dummy_Do_Not_Use?: string | null,
  ) { }
}

export interface Interface1 {
  I1P1: string;
  I1P2?: number | null;
}

export interface Interface2 {
  I2P1: number;
  I2P2?: string | null;
}

export abstract class BranchOneCondition extends DummyType {

  protected constructor(
    public B1C1P1: number,
    public B1C1P2?: string | null,
    public Dummy_Do_Not_Use?: string | null,
  ) {
    super(
      Dummy_Do_Not_Use,
    );
  }
}

// @ts-ignore needed to avoid this issue: https://github.com/microsoft/TypeScript/issues/4628
export class B1BarCondition extends BranchOneCondition {
  public static canHandle(odataType: string): boolean {
    return odataType === '#Company.FooService.B1BarCondition';
  }

  public readonly '@odata.type'?: string = '#Company.FooService.B1BarCondition';

  public get $$type() {
    return $$DummyTypeTypes.B1BarCondition;
  }

  public constructor(
    public B1C1P1: number,
    public CBC1P1: number,
    public B1C1P2?: string | null,
    public CBC1P2?: Interface1 | null,
    public Dummy_Do_Not_Use?: string | null,
  ) {
    super(
      B1C1P1,
      B1C1P2,
      Dummy_Do_Not_Use,
    );
  }

  public static create<TB1BarCondition extends B1BarCondition = B1BarCondition>(raw: TB1BarCondition): TB1BarCondition {
    return new this(
      raw.B1C1P1,
      raw.CBC1P1,
      raw.B1C1P2,
      raw.CBC1P2,
      raw.Dummy_Do_Not_Use,
    ) as TB1BarCondition;
  }

}

// @ts-ignore needed to avoid this issue: https://github.com/microsoft/TypeScript/issues/4628
export class B1FizzCondition extends BranchOneCondition {
  public static canHandle(odataType: string): boolean {
    return odataType === '#Company.FooService.B1FizzCondition';
  }

  public readonly '@odata.type'?: string = '#Company.FooService.B1FizzCondition';

  public get $$type() {
    return $$DummyTypeTypes.B1FizzCondition;
  }

  public constructor(
    public B1C1P1: number,
    public FC1P1: number,
    public B1C1P2?: string | null,
    public Dummy_Do_Not_Use?: string | null,
    public FC1P2?: Interface1 | null,
  ) {
    super(
      B1C1P1,
      B1C1P2,
      Dummy_Do_Not_Use,
    );
  }

  public static create<TB1FizzCondition extends B1FizzCondition = B1FizzCondition>(raw: TB1FizzCondition): TB1FizzCondition {
    return new this(
      raw.B1C1P1,
      raw.FC1P1,
      raw.B1C1P2,
      raw.Dummy_Do_Not_Use,
      raw.FC1P2,
    ) as TB1FizzCondition;
  }

}

// @ts-ignore needed to avoid this issue: https://github.com/microsoft/TypeScript/issues/4628
export class B1FooCondition extends BranchOneCondition {
  public static canHandle(odataType: string): boolean {
    return odataType === '#Company.FooService.B1FooCondition';
  }

  public readonly '@odata.type'?: string = '#Company.FooService.B1FooCondition';

  public get $$type() {
    return $$DummyTypeTypes.B1FooCondition;
  }

  public constructor(
    public B1C1P1: number,
    public FC1P1: number,
    public B1C1P2?: string | null,
    public Dummy_Do_Not_Use?: string | null,
    public FC1P2?: Enum1 | null,
  ) {
    super(
      B1C1P1,
      B1C1P2,
      Dummy_Do_Not_Use,
    );
  }

  public static create<TB1FooCondition extends B1FooCondition = B1FooCondition>(raw: TB1FooCondition): TB1FooCondition {
    return new this(
      raw.B1C1P1,
      raw.FC1P1,
      raw.B1C1P2,
      raw.Dummy_Do_Not_Use,
      raw.FC1P2,
    ) as TB1FooCondition;
  }

}

export enum $$StandardConditionTypes {
  BarCondition = 'BarCondition',
  FizzCondition = 'FizzCondition',
  FooCondition = 'FooCondition',
}

export interface StandardCondition {
  readonly $$type?: $$StandardConditionTypes;
}

export abstract class StandardCondition {

  protected static get derivedTypes(): typeof StandardCondition[] {
    return [
      BarCondition,
      FizzCondition,
      FooCondition,
    ] as unknown as typeof StandardCondition[];
  }

  public static create<TStandardCondition extends StandardCondition = StandardCondition>(raw: TStandardCondition): TStandardCondition {
    const edmType = (raw as ODataRawType<TStandardCondition>)[odataTypeKey];
    const ctor = this.derivedTypes.find((f) => f.canHandle(edmType));
    if (!ctor) {
      return raw;
    }
    return ctor.create(raw);
  }

  protected static canHandle(_odataType: string): boolean {
    return false;
  }

  protected constructor(
    public BC1P1: number,
    public BC1P2?: string | null,
  ) { }
}

// @ts-ignore needed to avoid this issue: https://github.com/microsoft/TypeScript/issues/4628
export class BarCondition extends StandardCondition {
  public static canHandle(odataType: string): boolean {
    return odataType === '#Company.FooService.BarCondition';
  }

  public readonly '@odata.type'?: string = '#Company.FooService.BarCondition';

  public get $$type() {
    return $$StandardConditionTypes.BarCondition;
  }

  public constructor(
    public BC1P1: number,
    public CBC1P1: number,
    public BC1P2?: string | null,
    public CBC1P2?: Interface1 | null,
  ) {
    super(
      BC1P1,
      BC1P2,
    );
  }

  public static create<TBarCondition extends BarCondition = BarCondition>(raw: TBarCondition): TBarCondition {
    return new this(
      raw.BC1P1,
      raw.CBC1P1,
      raw.BC1P2,
      raw.CBC1P2,
    ) as TBarCondition;
  }

}

// @ts-ignore needed to avoid this issue: https://github.com/microsoft/TypeScript/issues/4628
export class BarConfiguration extends BaseConfiguration {
  public static canHandle(odataType: string): boolean {
    return odataType === '#Company.FooService.BarConfiguration';
  }

  public readonly '@odata.type'?: string = '#Company.FooService.BarConfiguration';

  public get $$type() {
    return $$BaseConfigurationTypes.BarConfiguration;
  }

  public constructor(
    public BC1P1: number,
    public CBC1P1: number,
    public BC1P2?: string | null,
    public CBC1P2?: Interface1 | null,
  ) {
    super(
      BC1P1,
      BC1P2,
    );
  }

  public static create<TBarConfiguration extends BarConfiguration = BarConfiguration>(raw: TBarConfiguration): TBarConfiguration {
    return new this(
      raw.BC1P1,
      raw.CBC1P1,
      raw.BC1P2,
      raw.CBC1P2,
    ) as TBarConfiguration;
  }

}

// @ts-ignore needed to avoid this issue: https://github.com/microsoft/TypeScript/issues/4628
export class BranchTwoCondition extends DummyType {
  public static canHandle(odataType: string): boolean {
    return odataType === '#Company.FooService.BranchTwoCondition';
  }

  public readonly '@odata.type'?: string = '#Company.FooService.BranchTwoCondition';

  public get $$type() {
    return $$DummyTypeTypes.BranchTwoCondition;
  }

  public constructor(
    public B2C1P1: number,
    public B2C1P2?: string | null,
    public Dummy_Do_Not_Use?: string | null,
  ) {
    super(
      Dummy_Do_Not_Use,
    );
  }

  public static create<TBranchTwoCondition extends BranchTwoCondition = BranchTwoCondition>(raw: TBranchTwoCondition): TBranchTwoCondition {
    return new this(
      raw.B2C1P1,
      raw.B2C1P2,
      raw.Dummy_Do_Not_Use,
    ) as TBranchTwoCondition;
  }

}

// @ts-ignore needed to avoid this issue: https://github.com/microsoft/TypeScript/issues/4628
export class FizzCondition extends StandardCondition {
  public static canHandle(odataType: string): boolean {
    return odataType === '#Company.FooService.FizzCondition';
  }

  public readonly '@odata.type'?: string = '#Company.FooService.FizzCondition';

  public get $$type() {
    return $$StandardConditionTypes.FizzCondition;
  }

  public constructor(
    public BC1P1: number,
    public FC1P1: number,
    public BC1P2?: string | null,
    public FC1P2?: Interface1 | null,
    public FC1P3?: BaseConfiguration | null,
  ) {
    super(
      BC1P1,
      BC1P2,
    );
  }

  public static create<TFizzCondition extends FizzCondition = FizzCondition>(raw: TFizzCondition): TFizzCondition {
    return new this(
      raw.BC1P1,
      raw.FC1P1,
      raw.BC1P2,
      raw.FC1P2,
      createModel(BaseConfiguration, raw.FC1P3),
    ) as TFizzCondition;
  }

}

// @ts-ignore needed to avoid this issue: https://github.com/microsoft/TypeScript/issues/4628
export class FooCondition extends StandardCondition {
  public static canHandle(odataType: string): boolean {
    return odataType === '#Company.FooService.FooCondition';
  }

  public readonly '@odata.type'?: string = '#Company.FooService.FooCondition';

  public get $$type() {
    return $$StandardConditionTypes.FooCondition;
  }

  public constructor(
    public BC1P1: number,
    public FC1P1: number,
    public BC1P2?: string | null,
    public FC1P2?: Enum1 | null,
  ) {
    super(
      BC1P1,
      BC1P2,
    );
  }

  public static create<TFooCondition extends FooCondition = FooCondition>(raw: TFooCondition): TFooCondition {
    return new this(
      raw.BC1P1,
      raw.FC1P1,
      raw.BC1P2,
      raw.FC1P2,
    ) as TFooCondition;
  }

}

// @ts-ignore needed to avoid this issue: https://github.com/microsoft/TypeScript/issues/4628
export class FooConfiguration extends BaseConfiguration {
  public static canHandle(odataType: string): boolean {
    return odataType === '#Company.FooService.FooConfiguration';
  }

  public readonly '@odata.type'?: string = '#Company.FooService.FooConfiguration';

  public get $$type() {
    return $$BaseConfigurationTypes.FooConfiguration;
  }

  public constructor(
    public BC1P1: number,
    public FC1P1: number,
    public BC1P2?: string | null,
    public FC1P2?: Enum1 | null,
  ) {
    super(
      BC1P1,
      BC1P2,
    );
  }

  public static create<TFooConfiguration extends FooConfiguration = FooConfiguration>(raw: TFooConfiguration): TFooConfiguration {
    return new this(
      raw.BC1P1,
      raw.FC1P1,
      raw.BC1P2,
      raw.FC1P2,
    ) as TFooConfiguration;
  }

}

export enum Enum1 {
  Member1 = 'Member1',
  Member2 = 'Member2',
  Member3 = 'Member3',
}
