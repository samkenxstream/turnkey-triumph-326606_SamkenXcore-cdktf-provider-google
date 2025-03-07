// https://www.terraform.io/docs/providers/google/r/endpoints_service_consumers_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EndpointsServiceConsumersIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_consumers_iam_policy#consumer_project EndpointsServiceConsumersIamPolicy#consumer_project}
  */
  readonly consumerProject: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_consumers_iam_policy#id EndpointsServiceConsumersIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_consumers_iam_policy#policy_data EndpointsServiceConsumersIamPolicy#policy_data}
  */
  readonly policyData: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_consumers_iam_policy#service_name EndpointsServiceConsumersIamPolicy#service_name}
  */
  readonly serviceName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_consumers_iam_policy google_endpoints_service_consumers_iam_policy}
*/
export class EndpointsServiceConsumersIamPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_endpoints_service_consumers_iam_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/endpoints_service_consumers_iam_policy google_endpoints_service_consumers_iam_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EndpointsServiceConsumersIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: EndpointsServiceConsumersIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_endpoints_service_consumers_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.29.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._consumerProject = config.consumerProject;
    this._id = config.id;
    this._policyData = config.policyData;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumer_project - computed: false, optional: false, required: true
  private _consumerProject?: string; 
  public get consumerProject() {
    return this.getStringAttribute('consumer_project');
  }
  public set consumerProject(value: string) {
    this._consumerProject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerProjectInput() {
    return this._consumerProject;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // policy_data - computed: false, optional: false, required: true
  private _policyData?: string; 
  public get policyData() {
    return this.getStringAttribute('policy_data');
  }
  public set policyData(value: string) {
    this._policyData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDataInput() {
    return this._policyData;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consumer_project: cdktf.stringToTerraform(this._consumerProject),
      id: cdktf.stringToTerraform(this._id),
      policy_data: cdktf.stringToTerraform(this._policyData),
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }
}
