# Let's run a lighter script without extra packages just in case, standard print layout
import json
import gzip

# Basic tree structure
tree_data = {
    "val": "CompanyRoot",
    "children": [
        {
            "val": "EngineeringDept",
            "children": [
                {"val": "FrontendTeam", "children": [{"val": "ReactDevs", "children": []}]},
                {"val": "BackendTeam", "children": [{"val": "PythonDevs", "children": []}]}
            ]
        },
        {
            "val": "MarketingDept",
            "children": [
                {"val": "DesignTeam", "children": [{"val": "UIUXDesigners", "children": []}]},
                {"val": "GrowthTeam", "children": [{"val": "SEOExperts", "children": []}]}
            ]
        },
        {
            "val": "SalesDept",
            "children": [
                {"val": "EnterpriseSales", "children": [{"val": "AccountExecs", "children": []}]},
                {"val": "InboundSales", "children": [{"val": "SDRRepresentatives", "children": []}]}
            ]
        }
    ]
}

json_str = json.dumps(tree_data)

# DFS Count
def dfs_count(node):
    res = [node["val"], str(len(node["children"]))]
    for c in node["children"]: res.extend(dfs_count(c))
    return res
dfs_count_str = " ".join(dfs_count(tree_data))

# DFS Marker
def dfs_marker(node):
    res = [node["val"]]
    for c in node["children"]: res.extend(dfs_marker(c))
    res.append("E")
    return res
dfs_marker_str = " ".join(dfs_marker(tree_data))

xml_str = '<node val="CompanyRoot"><children><node val="EngineeringDept"><children><node val="FrontendTeam"><children><node val="ReactDevs"><children></children></node></children></node><node val="BackendTeam"><children><node val="PythonDevs"><children></children></node></children></node></children></node><node val="MarketingDept"><children><node val="DesignTeam"><children><node val="UIUXDesigners"><children></children></node></children></node><node val="GrowthTeam"><children><node val="SEOExperts"><children></children></node></children></node></children></node><node val="SalesDept"><children><node val="EnterpriseSales"><children><node val="AccountExecs"><children></children></node></children></node><node val="InboundSales"><children><node val="SDRRepresentatives"><children></children></node></children></node></children></node></children></node>'

yaml_str = """
val: CompanyRoot
children:
  - val: EngineeringDept
    children:
      - val: FrontendTeam
        children:
          - val: ReactDevs
            children: []
      - val: BackendTeam
        children:
          - val: PythonDevs
            children: []
  - val: MarketingDept
    children:
      - val: DesignTeam
        children:
          - val: UIUXDesigners
            children: []
      - val: GrowthTeam
        children:
          - val: SEOExperts
            children: []
  - val: SalesDept
    children:
      - val: EnterpriseSales
        children:
          - val: AccountExecs
            children: []
      - val: InboundSales
        children:
          - val: SDRRepresentatives
            children: []
"""

toml_str = """
val = "CompanyRoot"
[[children]]
val = "EngineeringDept"
[[children.children]]
val = "FrontendTeam"
[[children.children.children]]
val = "ReactDevs"
[[children.children]]
val = "BackendTeam"
[[children.children.children]]
val = "PythonDevs"
[[children]]
val = "MarketingDept"
[[children.children]]
val = "DesignTeam"
[[children.children.children]]
val = "UIUXDesigners"
[[children.children]]
val = "GrowthTeam"
[[children.children.children]]
val = "SEOExperts"
[[children]]
val = "SalesDept"
[[children.children]]
val = "EnterpriseSales"
[[children.children.children]]
val = "AccountExecs"
[[children.children]]
val = "InboundSales"
[[children.children.children]]
val = "SDRRepresentatives"
"""

for name, s in [("DFS Count", dfs_count_str), ("DFS Marker", dfs_marker_str), ("JSON", json_str), ("XML", xml_str), ("YAML", yaml_str), ("TOML", toml_str)]:
    b = s.encode('utf-8')
    gz = gzip.compress(b)
    print(f"{name} -> Raw: {len(b)} bytes | Gzip: {len(gz)} bytes")
